"use client";

import React from "react";
import Link from "next/link";
import MenuOutlined from "@ant-design/icons/MenuOutlined";
import UserOutlined from "@ant-design/icons/UserOutlined";

import { useResize } from "@/utils/helper";
import { navigation } from "@/routes/navigation";
import "./style.css";
import logo from "../../../public/logo.png";
import Image from "next/image";

import { ConnectButton } from "@rainbow-me/rainbowkit";

export const Topbar = () => {
  const { isResponsive } = useResize();

  return (
    <div className="topbar-container max-md:h-14">
      <div className="absolute w-full justify-center max-lg:flex">
        <div className="topbar-trapezoid"></div>
      </div>
      {!isResponsive ? (
        <nav className="topbar-main-panel">
          <ul>
            {navigation.map((item, index) => (
              <li key={index}>
                <div className="topbar-navitem">
                  <Link href={`#${item.url}`}>{item.label}</Link>
                </div>
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        <div className="w-full h-12 px-5 flex items-center justify-between">
          <MenuOutlined className="text-xl text-slate-300" />
          <UserOutlined className="text-xl text-slate-300" />
        </div>
      )}
    </div>
  );
};
