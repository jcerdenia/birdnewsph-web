import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
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

      <Link className="pb-4" href="/about">
        About
      </Link>
    </footer>
  );
}
