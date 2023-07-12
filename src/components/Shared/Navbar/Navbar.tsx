import { ConnectWallet } from "./ConnectWallet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuListStart,
  NavigationMenuListCenter,
  NavigationMenuListEnd,
} from "@/components/ui/navigation-menu";

import Image from "next/image";
import logo from "../../../../public/img/icon-nav.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuListStart className="text-white justify-star">
            <Link href={"/"} legacyBehavior passHref>
              <NavigationMenuLink>
                <Image src={logo} alt="Omni Kingdoms logo" />
              </NavigationMenuLink>
            </Link>
        </NavigationMenuListStart>
        <NavigationMenuListCenter className="text-white gap-4 justify-center">
          <NavigationMenuItem>
            <Link href={"/play"} legacyBehavior passHref>
              <NavigationMenuLink> Play</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={"/Mint"} legacyBehavior passHref>
              <NavigationMenuLink>Mint</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={"/leaderboard"} legacyBehavior passHref>
              <NavigationMenuLink>Leaderboard</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={"/Docs"} legacyBehavior passHref>
              <NavigationMenuLink>Docs</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuListCenter>
        <NavigationMenuListEnd className="text-white gap-4 justify-end">
          <NavigationMenuItem>
            <Link href={"/Docs"} legacyBehavior passHref>
              <NavigationMenuLink>+ New Character</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          {/* <NavigationMenuItem>
            {" "}
            <ConnectWallet />
          </NavigationMenuItem> */}
        </NavigationMenuListEnd>
      </NavigationMenu>
    </>
  );
}
