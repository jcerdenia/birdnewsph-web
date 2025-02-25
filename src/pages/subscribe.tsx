import Breadcrumb from "@/components/breadcrumb";
import Layout from "@/components/layout";
import Links from "@/components/links";
import site from "@/data/site";
import { useState } from "react";

export default function Subscribe() {
  const [loading, setLoading] = useState(true);

  return (
    <Layout
      metadata={{
        title: `Subscribe to ${site.title}`,
        description: site.description,
        metaType: "website",
      }}
    >
      <Breadcrumb head={site.title} item={"Subscribe"} linked={false} />
      <h3 className="mt-4">
        <strong>Subscribe</strong>
      </h3>

      {loading ? <div className="mt-4">Loading...</div> : null}

      <main className="mt-4">
        <iframe
          width="100%"
          height="440"
          src="https://0af2cd27.sibforms.com/serve/MUIFAEcjrGMH34rUlrJEOYGE3CtX_8G4TDkzFtD82L0L5tzgUQNSEpn8l8sh-BvmMLrI_OmZlZ0420Lq2JhgwYiXIgUqOHxfxLRMJNV5dn-l7vIEEKciI3x9-zmM1O-GTfQO0X6cs-f6RVQeEViyzgSDlIgPTnqLyI3NOp82dGuKqh3hXeFPU-XrvFAfJu6JtJt0UGXTRt0Kcp-e"
          onLoad={() => setLoading(false)}
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "100%",
          }}
        ></iframe>
      </main>

      <Links exclude={["subscribe"]} />
    </Layout>
  );
}
