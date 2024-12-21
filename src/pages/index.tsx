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
      articles: await client.fetch(QUERY.articles),
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
        <div>{phDate({ dateStyle: "full" }).format(new Date())}</div>
        <Articles articles={articles} />
      </main>
    </Layout>
  );
}
