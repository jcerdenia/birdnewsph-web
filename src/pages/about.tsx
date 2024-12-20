import Layout from "@/components/layout";
import Link from "next/link";

export default function About() {
  return (
    <Layout
      metadata={{
        title: "About PH Bird News",
        metaType: "article",
        description: "Latest Birding Reports from the Philippines",
      }}
      hasFooter={false}
    >
      <header>
        <p style={{ color: "unset", textDecoration: "none" }}>
          <span>
            <Link href="/">PH Bird News</Link> / About
          </span>
        </p>
        <h3 className="mt-4">
          <strong>About</strong>
        </h3>
      </header>

      <main className="mt-4">
        <p>
          <strong>PH Bird News</strong> is a fully automated AI-powered news
          feed of birding reports from the Philippines, updated hourly using the
          latest public data from <a href="https://ebird.org/">eBird</a>.
        </p>
        <p>
          AI being what it is, inaccuracies and embellishments are inevitable,
          but hopefully amusing. To mitigate this, articles are ephemeral and
          stay published for only 72 hours.
        </p>
        <p>
          My hope is that it becomes a fun way to stay up-to-date on goings-on
          in the small birding world of the Philippines and encourage more eBird
          submissions.
        </p>
        <p>
          This project was built for my own amusement, but should it generate
          enough interest, potential future improvements are:
        </p>
        <ul>
          <li>Human editors</li>
          <li>Photos</li>
          <li>A newsletter</li>
        </ul>
        <p>
          If you like what you see or have any comments,{" "}
          <a href="mailto:joshua[at]cerdenia[dot]com">contact me</a>.
        </p>
      </main>
    </Layout>
  );
}
