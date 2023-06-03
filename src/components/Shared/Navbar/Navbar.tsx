import { ConnectWallet } from "./ConnectWallet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import Image from "next/image";
import logo from "../../../../public/logo.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className="  bg-red-400 absolute drop-shadow-lg border-b-20 border-l-4 border-r-4">
            <div className=" h-20 w-20  p-0 ">
              <Image src={logo} alt="Omni Kingdoms logo" />
            </div>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList className="text-white gap-4">
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
            <Link href={"/Leaderboard"} legacyBehavior passHref>
              <NavigationMenuLink>Leaderboard</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={"/Docs"} legacyBehavior passHref>
              <NavigationMenuLink>Docs</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList>
          <NavigationMenuItem>
            {" "}
            <ConnectWallet />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
