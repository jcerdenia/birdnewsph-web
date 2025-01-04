import Attribution from "@/components/attribution";
import Breadcrumb from "@/components/breadcrumb";
import Layout from "@/components/layout";
import Links from "@/components/links";
import NotFound from "@/components/notfound";
import site from "@/data/site";
import client, { QUERY } from "@/lib/sanity";
import type { Article } from "@/lib/types";
import { phDate } from "@/lib/utils";
import { PortableText } from "next-sanity";

interface Props {
  article: Article;
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
  context: Context,
): Promise<ServerSideProps> {
  return {
    props: {
      article: await client.fetch(QUERY.article, {
        slug: context.params?.slug,
      }),
    },
  };
}

export default function Article({ article }: Props) {
  if (!article.title) {
    return <NotFound />;
  }

  return (
    <Layout
      metadata={{
        title: article.title,
        description: `${site.title}: ${site.description}`,
        metaType: "article",
      }}
    >
      <Breadcrumb head={site.title} item={article.tags[0]} />
      <h3 className="mt-4">
        <strong>{article.title}</strong>
      </h3>
      <main>
        <div className="mt-4">
          Published:{" "}
          {phDate({
            dateStyle: "full",
            timeStyle: "full",
          }).format(new Date(article._createdAt))}
        </div>
        <section className="mt-4">
          {article.body.map((b, i) => (
            <div key={i}>
              <PortableText value={b} />
            </div>
          ))}
        </section>
        <Attribution className="small mt-4" />
      </main>

      <Links checklistUrl={article.source} />
    </Layout>
  );
}
