import React from "react";
import "./style.css";
import logo from "../../../public/logo.png";
import Image from "next/image";

import { ConnectButton } from "@rainbow-me/rainbowkit";

export const Topbar = () => {
  return (
    <div className="topbar-container">
      <div className="topbar-logo-panel">
        <div className="topbar-trapezoid"></div>
      </div>
      <nav className="topbar-main-panel">
        <ul>
          <li>
            <div className="topbar-navitem">
              <a href="#home">Home</a>
            </div>
          </li>
          <li>
            <div className="topbar-navitem">
              <a href="#hero">Hero</a>
            </div>
          </li>
          <li>
            <div className="topbar-navitem">
              <a href="#store">Store</a>
            </div>
          </li>
          <li>
            <div className="topbar-navitem">
              <a href="#leaderboard">Leaderboard</a>
            </div>
          </li>
          <li>
            <div className="topbar-navitem">
              <a href="#learn">Learn</a>
            </div>
          </li>
          <li>
            <div className="topbar-navitem">
              <a href="#map">Map</a>
            </div>
          </li>
          <li>
            <div className="topbar-navitem">
              <ConnectButton
                accountStatus="address"
                chainStatus="icon"
                showBalance={false}
              />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};
