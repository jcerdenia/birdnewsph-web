import type { ArticleHead } from "@/lib/types";
import Link from "next/link";

interface Props {
  className?: string;
  articles: ArticleHead[];
}

export default function Articles({ className, articles }: Props) {
  return (
    <section className={className}>
      {articles.map((a) => (
        <div className="my-4" key={a._id}>
          <Link href={a.slug}>{a.title}</Link>
        </div>
      ))}
    </section>
  );
}
