import React from "react";
import TablesSell from "./components/TablesSell";
import { Button } from "@/components/ui/button";

export default function Sell() {
  return (
    <div className="container py-8">
      <div className="flex justify-between pb-6 items-center">
        <h1 className="text-3xl font-semibold">On Stock !</h1>
        <Button>Add Data</Button>
      </div>
      <div>
        <TablesSell />
      </div>
    </div>
  );
}
