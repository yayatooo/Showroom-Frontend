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
import { useFetchProducts } from "@/app/service/useFetchSells";
import { toast, Toaster } from "sonner";
import { DeleteAction } from "./DeleteAction";
import { SoldAction } from "./SoldAction";
import Link from "next/link";
import { FormatRupiah } from "@arismun/format-rupiah";
import { SkeletonPoliceNumber } from "./SkeletonPoliceNumber";

export default function TablesSell() {
  const {
    data,
    isError,
    refetch: refetchData,
  } = useFetchProducts({
    onError: (error) => {
      toast.error("Motor Gagal dimuat", error);
    },
  });

  // if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {isError}</div>;

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
        {data?.data.map((item: DataBike, index: number) => {
          return (
            <TableRow key={index}>
              <Toaster richColors />
              <TableCell>
                {item.policeNumber}
              </TableCell>
              <TableCell>{item.category.name}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.frameNumber}</TableCell>
              <TableCell>
                <FormatRupiah value={item.price} />
              </TableCell>
              <TableCell className="flex gap-3 justify-end">
                <DeleteAction
                  sellId={item._id}
                  onSuccess={() => refetchData()}
                />
                <Link href={`/sell/${item._id}`}>
                  <Button className="bg-yellow-500 hover:bg-yellow-700">
                    Edit
                  </Button>
                </Link>
                <SoldAction soldId={item._id} onSuccess={() => refetchData()} />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
