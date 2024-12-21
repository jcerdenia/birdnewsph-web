import Breadcrumb from "@/components/breadcrumb";
import Layout from "@/components/layout";
import Links from "@/components/links";
import site from "@/data/site";

export default function About() {
  return (
    <Layout
      metadata={{
        title: `About ${site.title}`,
        description: site.description,
        metaType: "article",
      }}
      hasFooter={false}
    >
      <Breadcrumb head={site.title} item={"About"} />
      <h3 className="mt-4">
        <strong>About</strong>
      </h3>

      <main className="mt-4">
        <p>
          <strong>PH Bird News</strong> is a fully automated artificial
          intelligence-powered news feed bringing you the latest birding reports
          from around the Philippines, updated hourly and driven by public data
          from <a href="https://ebird.org/">eBird</a>.
        </p>
        <p>
          Generative AI being what it is, inaccuracies and embellishments are
          inevitable but hopefully amusing. To mitigate this, articles are
          ephemeral and stay live for only 72 hours.
        </p>
        <p>
          I hope the site becomes a fun way to stay up-to-date on goings-on in
          the small birding world of the Philippines and encourage more eBird
          submissions.
        </p>
        <p>
          This project was built firstly for my own amusement, but should it
          generate enough interest from others, potential future improvements
          are:
        </p>
        <ul>
          <li>Human editors and contributors</li>
          <li>Photos</li>
          <li>A newsletter</li>
        </ul>
        <p>
          If you like what you see or have any comments,{" "}
          <a href={`mailto:${site.mailto}`}>contact me</a>.
        </p>
      </main>

      <Links />
    </Layout>
  );
}
