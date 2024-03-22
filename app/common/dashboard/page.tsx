import { CardDashboard } from "@/app/ui/CardDashboard";
import React from "react";

export default function Dashboard() {
  return (
    <>
      <h1 className="text-3xl font-semibold">Dashboard</h1>
      <div className="flex gap-4">
        <CardDashboard />
        <CardDashboard />
        <CardDashboard />
      </div>
    </>
  );
}
