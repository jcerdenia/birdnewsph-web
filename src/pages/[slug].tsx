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
      tags,
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
    <Layout
      metadata={{
        title: article.title,
        description:
          "PH Bird News: Latest Birding Reports from the Philippines",
        metaType: "article",
      }}
    >
      <header>
        <p style={{ color: "unset", textDecoration: "none" }}>
          <span>
            <Link href="/">PH Bird News</Link> / {article.tags[0]}
          </span>
        </p>
        <h3 className="mt-4">
          <strong>{article.title}</strong>
        </h3>
      </header>

      <main>
        <p className="mt-4">
          Published:{" "}
          {phDate({
            dateStyle: "full",
            timeStyle: "full",
          }).format(new Date(article._createdAt))}
        </p>

        <section className="mt-4">
          {article.body.map((b, i) => (
            <div key={i}>
              <PortableText value={b} />
            </div>
          ))}
        </section>
      </main>

      <section>
        <p className="mt-4">
          <a href={article.source} target="_blank" rel="noopener noreferrer">
            View eBird List
          </a>
        </p>

        <Link className="mt-4" href="/">
          Home
        </Link>
      </section>
    </Layout>
  );
}
