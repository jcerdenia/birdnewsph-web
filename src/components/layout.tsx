import Head from "next/head";
import { PropsWithChildren } from "react";
import Footer from "./footer";

interface Props extends PropsWithChildren {
  metadata: {
    title: string;
    description: string;
    metaType: string;
  };
  hasFooter?: boolean;
}

export default function Layout({
  metadata,
  children,
  hasFooter = true,
}: Props) {
  return (
    <div>
      <Head>
        <title>{metadata.title}</title>

        <meta property="og:type" content={metadata.metaType} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta
          property="og:image"
          content="https://ph.birdnews.xyz/egret.jpeg"
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta
          name="twitter:image"
          content="https://ph.birdnews.xyz/egret.jpeg"
        />
      </Head>
      <div className="main container my-4">{children}</div>

      {hasFooter ? <Footer /> : <div className="p-4" />}
    </div>
  );
}
