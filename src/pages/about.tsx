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
      <Breadcrumb head={site.title} item={"About"} linked={false} />
      <h3 className="mt-4">
        <strong>About</strong>
      </h3>

      <main className="mt-4">
        <p>
          <strong>From the Creator</strong>
        </p>
        <p>
          PH Bird News is a fully automated artificial intelligence-powered news
          feed bringing you the latest birding reports from around the
          Philippines. Running daily from morning to midnight, articles are
          published hourly and driven by public data from{" "}
          <a href="https://ebird.org/">eBird</a>, an online database of bird
          distribution and abundance.
        </p>
        <p>
          Generative AI being what it is, inaccuracies and embellishments are
          inevitable but hopefully amusing. To mitigate this, articles are
          ephemeral and stay publicly listed for only 72 hours. I am always
          experimenting to get the best possible results from the AI model.
        </p>
        <p>
          I hope the site becomes a fun way to stay up-to-date on goings-on in
          the small birding world of the Philippines and encourages more eBird
          submissions.
        </p>
        <p>
          This is a non-commercial project built firstly for my own
          entertainment, but should it generate enough interest, potential
          future improvements are:
        </p>
        <ul>
          <li>Human editors</li>
          <li>Photos</li>
          <li>An email newsletter</li>
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
