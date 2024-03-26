import React from "react";
import { Logo } from "./Logo";
import { ProfileMenu } from "./ProfileMenu";
import { Navlink } from "./Navlink";


export const Navbar = () => {

  return (
    <main className="container flex justify-between items-center pt-4">
      <div className="flex items-center gap-8">
        <Logo />
        <Navlink />
      </div>
      <div>
        <ProfileMenu />
      </div>
    </main>
  );
};
