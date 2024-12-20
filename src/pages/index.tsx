import client from "@/lib/sanity";
import type { ArticleHead } from "@/lib/types";
import { phDate } from "@/lib/utils";
import Link from "next/link";
import Layout from "@/components/layout";

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
  return (
    <Layout
      metadata={{
        title: "PH Bird News: The Latest Birding Reports from the Philippines",
      }}
    >
      <header>
        <h3>
          <strong>PH Bird News</strong>
        </h3>
        <p className="mt-3">
          The The Latest Birding Reports from the Philippines
        </p>
      </header>

      <main>
        <p>{phDate({ dateStyle: "full" }).format(new Date())}</p>

        <ul>
          {articles.map((a) => (
            <li className="my-1" key={a._id}>
              <Link href={a.slug}>{a.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}
