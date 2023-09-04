"use client";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import "./index.css";
import { notifierStore } from '@/store/notifierStore';
import NotifierPopup from '../Notifier/NotifierPopup';

export default function Footer() {
  const notifierText = notifierStore((state) => state.notifierText);

  return (
    <>
      {
        notifierText && (
          <NotifierPopup />
        )
      }
      <footer className="flex justify-center gap-5 p-4 z-40">
        <div className="items-center text-footer">
          <p> OmniKingdoms Copyright © 2023 - All right reserved</p>
        </div>
        <div className="flex gap-4 md:justify-self-end">
          <Link href={"https://twitter.com/OmniKingdoms"} target={"_blank"}>
            <FaTwitter size={30} color="white" />
          </Link>
          <Link href={"https://discord.com/invite/NX3qZuAFvG"} target={"_blank"}>
            <FaDiscord size={30} color="white" />
          </Link>
        </div>
      </footer>
    </>
  );
}
