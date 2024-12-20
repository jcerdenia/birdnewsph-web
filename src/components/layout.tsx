import Head from "next/head";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  metadata: {
    title: string;
  };
}

export default function Layout({ metadata, children }: Props) {
  return (
    <div>
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <div className="container my-4">{children}</div>
    </div>
  );
}
