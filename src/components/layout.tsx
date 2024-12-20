import Head from "next/head";
import { PropsWithChildren } from "react";
import Image from "next/image";

interface Props extends PropsWithChildren {
  metadata: {
    title: string;
    description: string;
    metaType: string;
  };
}

export default function Layout({ metadata, children }: Props) {
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
      <div className="container my-4">{children}</div>
      <footer className="my-4 pt-4 d-flex justify-content-center align-items-center flex-column text-center">
        <p>
          <a
            property="dct:title"
            rel="cc:attributionURL"
            href="https://ph.birdnews.xyz"
          >
            PH Bird News
          </a>{" "}
          is marked with{" "}
          <a
            href="https://creativecommons.org/publicdomain/zero/1.0/?ref=chooser-v1"
            target="_blank"
            rel="license noopener noreferrer"
            className="d-inline-flex align-items-center"
          >
            CC0 1.0 Universal
            <Image
              className="ms-1"
              style={{ verticalAlign: "text-bottom" }}
              src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
              alt=""
              height={18}
              width={18}
            />
            <Image
              className="ms-1"
              style={{ verticalAlign: "text-bottom" }}
              src="https://mirrors.creativecommons.org/presskit/icons/zero.svg?ref=chooser-v1"
              alt=""
              height={18}
              width={18}
            />
          </a>
        </p>
      </footer>
    </div>
  );
}
