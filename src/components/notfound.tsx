import Layout from "@/components/layout";
import site from "@/data/site";
import Breadcrumb from "./breadcrumb";

export default function NotFound() {
  const content = {
    title: "Page Not Found",
    description:
      "The page you are looking for does not exist or is no longer available.",
  };

  return (
    <Layout
      metadata={{
        title: content.title,
        description: content.description,
        metaType: "website",
      }}
    >
      <Breadcrumb head={site.title} />

      <h3 className="mt-4">
        <strong>{content.title}</strong>
      </h3>

      <main>
        <div className="mt-4">{content.description}</div>
      </main>
    </Layout>
  );
}
