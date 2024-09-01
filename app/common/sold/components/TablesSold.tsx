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
import { DataBike } from "@/app/type/dataBike";
import { useFetchProductsSold } from "@/app/service/useFetchSold";
import { toast, Toaster } from "sonner";
import { DeleteAction } from "./DeleteAction";
import { FormatRupiah } from "@arismun/format-rupiah";
import { formatDate } from "@/app/utils/formatDate";

export default function TableSold() {
  const {
    data,
    isError,
    isLoading,
    refetch: refetchData,
  } = useFetchProductsSold({
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
          <TableHead>Date</TableHead>
          <TableHead>Police Number</TableHead>
          <TableHead>Categorry</TableHead>
          <TableHead>Bike Name</TableHead>
          <TableHead>Frame Number</TableHead>
          <TableHead>Price</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.data.map((item: DataBike, index: any) => {
          return (
            <TableRow key={index}>
              <Toaster richColors />
              <TableCell>{formatDate(item.createdAt)}</TableCell>
              <TableCell className="font-medium">{item.policeNumber}</TableCell>
              <TableCell>{item.category.name}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.frameNumber}</TableCell>
              <TableCell><FormatRupiah value={item.price} /></TableCell>
              <TableCell className="flex gap-3 justify-end">
                <DeleteAction
                  soldId={item._id}
                  onSuccess={() => refetchData()}
                />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
