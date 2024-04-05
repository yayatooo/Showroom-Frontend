"use client"
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
import { DataBike } from "@/app/type/dataBike";
import { useFetchProducts } from "@/app/service/useFetchSells";
import { toast, Toaster } from "sonner";
import { useDeleteSell } from "@/app/service/useDeleteSells";
import { DeleteAction } from "./DeleteAction";

export default function TablesSell() {
  const {
    data,
    isError,
    isLoading,
    refetch: refetchData,
  } = useFetchProducts({
    onError: (error) => {
      toast.error("Motor Gagal dimuat", error);
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {isError}</div>;


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
        {data?.data.map((item: DataBike, index: number) => {
          return (
            <TableRow key={index}>
              <Toaster richColors />
              <TableCell className="font-medium">{item.policeNumber}</TableCell>
              <TableCell>Yamaha</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.frameNumber}</TableCell>
              <TableCell>{item.price.toString()}</TableCell>
              <TableCell className="flex gap-3 justify-end">
              <DeleteAction sellId={item._id} onSuccess={() => refetchData()} />
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
