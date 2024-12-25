import site from "@/data/site";
import Link from "next/link";

interface Props {
  checklistUrl?: string;
}

export default function Links({ checklistUrl }: Props) {
  return (
    <section>
      {checklistUrl ? (
        <div className="mt-4">
          <a href={checklistUrl} rel="noopener noreferrer">
            View eBird Checklist
          </a>
        </div>
      ) : null}

      <div className="mt-4">
        <a href={site.subscribeUrl}>Sign up for Email Updates</a>
      </div>

      <div className="mt-4">
        <Link href="/">Home</Link>
      </div>
    </section>
  );
}
