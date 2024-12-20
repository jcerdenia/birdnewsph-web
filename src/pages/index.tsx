import client from "@/lib/sanity";
import type { ArticleHead } from "@/lib/types";
import { phDate } from "@/lib/utils";
import Link from "next/link";
import Layout from "@/components/layout";
import Image from "next/image";

interface Props {
  articles: ArticleHead[];
}

interface ServerSideProps {
  props: Props;
}

export async function getServerSideProps(): Promise<ServerSideProps> {
  const articles = await client.fetch(`
    *[_type == "article" && dateTime(_createdAt) > dateTime(now()) - 60*60*72]
    | order(_createdAt desc) {
      _id,
      _createdAt,
      title,
      slug,
    }
  `);

  return {
    props: {
      articles,
    },
  };
}

export default function Home({ articles }: Props) {
  const title = "PH Bird News";
  const description = "Latest Birding Reports from the Philippines";

  return (
    <Layout
      metadata={{
        title: `${title}: ${description}`,
      }}
    >
      <header>
        <h3>
          <Link
            className="title d-flex align-items-center"
            style={{ color: "unset", textDecoration: "none" }}
            href="/"
          >
            <Image
              className="me-2"
              src="/logo.png"
              alt=""
              height={24}
              width={24}
            />
            {title}
          </Link>
        </h3>
        <p className="mt-3">{description}</p>
        <hr className="custom-hr" />
      </header>

      <main>
        <p>{phDate({ dateStyle: "full" }).format(new Date())}</p>

        <section>
          {articles.map((a) => (
            <div className="my-3" key={a._id}>
              <Link href={a.slug}>{a.title}</Link>
            </div>
          ))}
        </section>
      </main>
    </Layout>
  );
}
