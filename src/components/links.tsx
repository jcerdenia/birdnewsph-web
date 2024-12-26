import Link from "next/link";

interface Props {
  checklistUrl?: string;
  exclude?: string[];
}

export default function Links({ checklistUrl, exclude = [] }: Props) {
  return (
    <section>
      {checklistUrl ? (
        <div className="mt-4">
          <a href={checklistUrl} rel="noopener noreferrer">
            View eBird Checklist
          </a>
        </div>
      ) : null}

      {!exclude.includes("subscribe") ? (
        <div className="mt-4">
          <Link href="/subscribe">Sign Up for Email Updates</Link>
        </div>
      ) : null}

      <div className="mt-4">
        <Link href="/">Home</Link>
      </div>
    </section>
  );
}
