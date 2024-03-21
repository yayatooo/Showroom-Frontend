import React from "react";
import { Logo } from "./Logo";
import { ProfileMenu } from "./ProfileMenu";

  

export const MenuBar = () => {
  return (
    <main className="flex py-3 justify-between px-6">
      <div className="flex items-center gap-8">
        <Logo />
        <ul className="flex font-medium gap-3">
          <li>Dashboard</li>
          <li>Sell</li>
          <li>Sold</li>
          <li>Input</li>
        </ul>
      </div>
      <div>
       <ProfileMenu />
      </div>
    </main>
  );
};
