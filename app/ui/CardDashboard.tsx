import React from "react";
import { TbCurrencyDollar, } from "react-icons/tb";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


interface CardProps {
  title: string;
  capitals: any;
  logo: any// Specify the type as IconType
}

export const CardDashboard: React.FC<CardProps> = ({ title, capitals, logo }) => {
  return (
    <Card className="w-full my-4 p-6">
      <CardContent className="p-0 flex justify-between">
        <p className="font-semibold text-sm">{title}</p>
        {logo} 
      </CardContent>
      <CardHeader className="pt-3 px-0 pb-0">
        <CardTitle>{capitals}</CardTitle>
      </CardHeader>
    </Card>
  );
};
