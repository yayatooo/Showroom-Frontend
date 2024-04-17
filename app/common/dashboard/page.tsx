import { CardDashboard } from "@/app/ui/CardDashboard";
import { TableDemo } from "@/app/ui/Table";
import { TbCurrencyDollar,TbMotorbike  } from "react-icons/tb";
import { CgNotes } from "react-icons/cg";
import { FormatRupiah } from "@arismun/format-rupiah";

import React from "react";

export default function Dashboard() {

  const valueOfKeutungan = <FormatRupiah value={85000000} />

  return (
    <>
      <h1 className="text-3xl font-semibold">Dashboard</h1>
      <div className="flex gap-4">
        <CardDashboard title="Keuntungan" capitals={valueOfKeutungan} logo={<TbCurrencyDollar />} />
        <CardDashboard title="Jumlah Motor" capitals={10} logo={<TbMotorbike />} />
        <CardDashboard title="Motor Laku" capitals={5} logo={<CgNotes />} />
      </div>
      <div className="py-3">
      <TableDemo />
      </div>
    </>
  );
}
