import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  logo: string;
}

export default function Header({ title, description, logo }: Props) {
  return (
    <header>
      <h3>
        <Link
          className="title d-flex align-items-center"
          style={{ color: "unset", textDecoration: "none" }}
          href="/"
        >
          <Image className="me-2" src={logo} alt="" height={24} width={24} />
          {title}
        </Link>
      </h3>
      <div className="mt-4">{description}</div>
      <hr className="mt-4 custom-hr" />
    </header>
  );
}
