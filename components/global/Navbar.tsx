import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Image
        alt="title"
        src={"https://vectorified.com/images/logo-icon-30.png"}
        width={40}
        height={40}
        placeholder="blur"
        blurDataURL="https://vectorified.com/images/logo-icon-30.png"
      />
      <h2>Fun Tickets</h2>
      <div>
        <Link href={"/"}>Dashboard</Link>
      </div>
      <div>
        <Link href={"/ticket"}>Tickets</Link>
      </div>
    </nav>
  );
}
