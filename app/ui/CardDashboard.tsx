import React from "react";
import { TbCurrencyDollar } from "react-icons/tb";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface CardProps {
  children: React.ReactNode;
}

export const CardDashboard = () => {
  return (
    <Card className="w-full my-4 p-6">
      <CardContent className="p-0 flex justify-between">
        <p className="font-semibold text-sm">Keuntungan</p>
        <p><TbCurrencyDollar /></p>
      </CardContent>
      <CardHeader className="pt-3 px-0 pb-0">
        <CardTitle>Rp. 58.000.000</CardTitle>
      </CardHeader>
    </Card>
  );
};
