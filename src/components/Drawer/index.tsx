"use client";

import React from "react";
import "./style.css";

interface DrawerProp {
  type: "default" | "primary";
}

export const Drawer = ({ type }: DrawerProp) => {
  if (type === "default") {
  } else {
    return (
      <div>
        <div className="drawer-point"></div>
        <div className="drawer-content"></div>
      </div>
    );
  }
};
