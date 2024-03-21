import React from "react";
import { Logo } from "./Logo";
import { ProfileMenu } from "./ProfileMenu";
import { NavLink } from "../utils/data";
import Link from "next/link";

export const MenuBar = () => {
  return (
    <main className="flex py-3 justify-between">
      <div className="flex items-center gap-8">
        <Logo />
        <ul className="flex font-medium gap-3">
          {NavLink.map(item => (
            <Link key={item.id} href={item.link}>{item.tittle}</Link>
          ))}
        </ul>
      </div>
      <div>
       <ProfileMenu />
      </div>
    </main>
  );
};
