import client from "@/lib/sanity";
import type { Article } from "@/lib/types";
import { phDate } from "@/lib/utils";
import { PortableText } from "next-sanity";
import Link from "next/link";
import Layout from "@/components/layout";

interface Props {
  article: Article | null;
}

interface ServerSideProps {
  props: Props;
}

interface Context {
  params?: {
    slug: string;
  };
}

export async function getServerSideProps(
  context: Context
): Promise<ServerSideProps> {
  const article: Article | null = await client.fetch(
    `*[_type == "article" && slug == $slug][0]{
      _id,
      _createdAt,
      title,
      body,
      source,
    }`,
    { slug: context.params?.slug }
  );

  return {
    props: {
      article,
    },
  };
}

export default function Article({ article }: Props) {
  if (!article) {
    return <div className="error">Article not found.</div>;
  }

  return (
    <Layout metadata={{ title: article.title }}>
      <header>
        <h3>
          <strong>{article.title}</strong>
        </h3>
      </header>

      <main>
        <p className="mt-3">
          Published:{" "}
          {phDate({
            dateStyle: "full",
            timeStyle: "full",
          }).format(new Date(article._createdAt))}
        </p>

        {article.body.map((b, i) => (
          <div key={i}>
            <PortableText value={b} />
          </div>
        ))}
      </main>

      <footer>
        <p>
          <a href={article.source} target="_blank" rel="noopener noreferrer">
            <strong>View eBird List</strong>
          </a>
        </p>

        <Link href="/">
          <strong>Home</strong>
        </Link>
      </footer>
    </Layout>
  );
}
