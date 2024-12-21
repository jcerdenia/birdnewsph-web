import type { ArticleHead } from "@/lib/types";
import Link from "next/link";

interface Props {
  articles: ArticleHead[];
}

export default function Articles({ articles }: Props) {
  return (
    <section>
      {articles.map((a) => (
        <div className="my-3" key={a._id}>
          <Link href={a.slug}>{a.title}</Link>
        </div>
      ))}
    </section>
  );
}
