"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import fetchSellsBike from "@/app/service/getDataSells";
import { DataBike } from "@/app/type/dataBike";

export default function TablesSell() {
  const { isLoading, isError, data } = useQuery({
    queryFn: () => fetchSellsBike(),
    queryKey: ["sells"],
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  console.log(data);

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Police Number</TableHead>
          <TableHead>Categorry</TableHead>
          <TableHead>Bike Name</TableHead>
          <TableHead>Frame Number</TableHead>
          <TableHead>Price</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item: DataBike, index: any) => {
          return (
            <TableRow key={index}>
              <TableCell className="font-medium">{item.policeNumber}</TableCell>
              <TableCell>Yamaha</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.frameNumber}</TableCell>
              <TableCell>{item.price.toString()}</TableCell>
              <TableCell className="flex gap-3 justify-end">
                <Button className="bg-red-600 hover:bg-red-800">Delete</Button>
                <Button className="bg-yellow-500 hover:bg-yellow-700">
                  Edit
                </Button>
                <Button className="bg-green-600 hover:bg-green-800">
                  Sold
                </Button>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
