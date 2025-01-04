import Link from "next/link";

interface Props {
  head: string;
  item?: string;
  linked?: boolean;
}

export default function Breadcrumb({ head, item, linked = true }: Props) {
  return (
    <header>
      <p style={{ color: "unset", textDecoration: "none" }}>
        <span>
          <Link href="/">{head}</Link> {item ? "> " : null}
          {linked ? <Link href={`/tags?name=${item}`}>{item}</Link> : item}
        </span>
      </p>
    </header>
  );
}
