"use client";
import { useAccount } from "wagmi";
import { ConnectWallet } from "../Shared/ConnectWallet";

import Image from "next/image";
import logo from "../../../public/img/icon-nav.png";
import Link from "next/link";

export default function Navbar() {

  const { address } = useAccount();
  const getConnect = () => {
    if (address)
      return (
        <ConnectWallet />
      )
  }

  return (
    <>
      <nav className="flex w-full justify-between px-10 py-5 items-center font-extrabold">
        <Link
          href="/"
          className="btn btn-ghost normal-case text-xl  hover:bg-gray-600 "
        >
          <Image
            src={logo}
            className="   hover:cursor-pointer "
            alt="chest"
          />
        </Link>
        <div>
          <ul className="flex px-1 gap-4">
            <li className="px-3 py-2 rounded hover:bg-gray-600 ">
              <Link passHref href={"/play"}>
                Play
              </Link>
            </li>

            <li className="px-3 py-2 rounded hover:bg-gray-600 ">
              <Link href={"/leaderboard"}>Leaderboard</Link>
            </li>

            <li className="px-3 py-2 rounded hover:bg-gray-600 ">
              <Link
                href={
                  "https://scroll-kingdoms-1.gitbook.io/game-play/game-play"
                }
                target="_blank"
              >
                Docs
              </Link>
            </li>

            <li className="px-3 py-2 rounded hover:bg-gray-600 ">
              <Link
                href={"https://www.incepthink.com/mantle/faucet"}
                target="_blank"
              >
                Mantle Faucets
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex px-1 gap-4">
            <li className="px-3 py-3 rounded hover:bg-gray-600">
              <Link passHref href={"/mint"}>
                + New Character
              </Link>
            </li>
            <li className="px-3 py-2 rounded hover:bg-gray-600 ">
                {getConnect()}
            </li>
          </ul>
        </div>
      </nav>
      
    </>
  );
}
