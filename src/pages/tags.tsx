import Articles from "@/components/articles";
import Breadcrumb from "@/components/breadcrumb";
import Layout from "@/components/layout";
import site from "@/data/site";
import client, { QUERY } from "@/lib/sanity";
import type { ArticleHead } from "@/lib/types";

interface Props {
  tag?: string;
  articles?: ArticleHead[];
}

interface ServerSideProps {
  props: Props;
}

interface Context {
  query: {
    name: string;
  };
}

export async function getServerSideProps(
  context: Context,
): Promise<ServerSideProps> {
  return {
    props: {
      tag: context.query.name,
      articles: await client.fetch(QUERY.taggedArticles, {
        tags: [context.query.name],
      }),
    },
  };
}

export default function Tags({ tag, articles }: Props) {
  if (!tag || !articles) {
    return <div>Not found.</div>;
  }

  return (
    <Layout
      metadata={{
        title: tag,
        description: `${site.title}: ${site.description}`,
        metaType: "website",
      }}
    >
      <Breadcrumb head={site.title} item={tag} />

      <h3 className="mt-4">
        <strong>{tag}</strong>
      </h3>

      <main>
        <div className="mt-4">
          {articles.length} {articles.length > 1 ? "results" : "result"}
        </div>

        <Articles className="mt-4" articles={articles} />
      </main>
    </Layout>
  );
}
