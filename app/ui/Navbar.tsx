import React from "react";
import { Logo } from "./Logo";
import { ProfileMenu } from "./ProfileMenu";
import { Navlink } from "./Navlink";
import { Input } from "@/components/ui/input"



export const Navbar = () => {

  return (
    <main className="container flex justify-between items-center pt-4">
      <div className="flex items-center gap-8">
        <Logo />
        <Navlink />
      </div>
      <div className="flex gap-x-6 items-center">
        <Input type="search" placeholder="Search Bike" className="rounded-xl" />
        <ProfileMenu />
      </div>
    </main>
  );
};
