import Articles from "@/components/articles";
import Header from "@/components/header";
import Layout from "@/components/layout";
import site from "@/data/site";
import client, { QUERY } from "@/lib/sanity";
import type { ArticleHead } from "@/lib/types";
import { phDate } from "@/lib/utils";

interface Props {
  articles: ArticleHead[];
}

interface ServerSideProps {
  props: Props;
}

export async function getServerSideProps(): Promise<ServerSideProps> {
  return {
    props: {
      articles: await client.fetch(QUERY.articles, {
        date: new Date("2025-08-26T23:59:00+08:00").toISOString(),
      }),
    },
  };
}

export default function Home({ articles }: Props) {
  return (
    <Layout
      metadata={{
        title: `${site.title}: ${site.description}`,
        description: site.description,
        metaType: "website",
      }}
    >
      <Header {...site} />
      <main>
        <div className="mt-4">
          {phDate({ dateStyle: "full" }).format(new Date())}
        </div>

        <div className="mt-4 alert alert-light" role="alert">
          This site is currently paused to free up resources for other projects.
        </div>

        <Articles className="mt-4" articles={articles} />
      </main>
    </Layout>
  );
}
