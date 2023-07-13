"use client"

import Image from "next/image";
import logo from "../../../public/img/icon-nav.png";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Navbar() {

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
                href={
                  "https://v1.omnikingdoms.io/"
                }
                target="_blank"
              >
                V1gi
              </Link>
            </li>

          </ul>
        </div>
        <div>
          <ul className="flex px-1 gap-4">
            <li className="px-3 py-3 rounded hover:bg-gray-600">
              <Link passHref href={"/home"}>
                <button
                  className="w-64 px-3 py-2 rounded bg-white text-black"
                >
                  Game Dashboard 
                  {/* <FaArrowRight size={20} color="black"/> */}
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      
    </>
  );
}
