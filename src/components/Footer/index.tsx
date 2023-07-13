import { FaDiscord, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pad-5 relative items-center footer flex justify-center w-full p-4 text-neutral-content gap-4">
      <div className="items-center grid-flow-col">
        <p> OmniKingdoms Copyright © 2023 - All right reserved</p>
      </div>
      <div className="grid-flow-col flex gap-4 md:place-self-center md:justify-self-end">
        <Link href={"https://twitter.com/OmniKingdoms"} target={"_blank"}>
          <FaTwitter size={30} color="white" />
        </Link>
        <Link href={"https://discord.com/invite/NX3qZuAFvG"} target={"_blank"}>
          <FaDiscord size={30} color="white" />
        </Link>
      </div>
    </footer>
  );
}