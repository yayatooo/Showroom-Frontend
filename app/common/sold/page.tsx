import React from "react";
import TableSold from "./components/TablesSold";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/app/ui/Navbar";
import Footer from "@/app/ui/Footer";

export default function Sold() {
  return (
    <>
      <Navbar />
      <div className="container py-8">
        <div className="pb-6">
          <h1 className="text-3xl font-semibold">Sold !</h1>
        </div>
        <div>
          <TableSold />
        </div>
      </div>
      <Footer />
    </>
  );
}
