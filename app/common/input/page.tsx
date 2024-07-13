import React from "react";
import InputBike from "./components/InputBike";
import { Navbar } from "@/app/ui/Navbar";
import Footer from "@/app/ui/Footer";

export default function Input() {
  return (
    <>
      <Navbar />
      <div className="container py-8">
        <div className="pb-6">
          <h1 className="text-3xl font-semibold">Input Data !</h1>
        </div>
        <InputBike />
      </div>
      <Footer />
    </>
  );
}
