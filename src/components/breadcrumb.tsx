import Link from "next/link";

interface Props {
  head: string;
  item: string;
}

export default function Breadcrumb({ head, item }: Props) {
  return (
    <header>
      <p style={{ color: "unset", textDecoration: "none" }}>
        <span>
          <Link href="/">{head}</Link>{" "}
          {/* Link disabled for now
               / <Link href={`/tags?t=${t}`}>{t}</Link> */}
          / {item}
        </span>
      </p>
    </header>
  );
}
