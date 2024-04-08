"use client";
import React from "react";
import { UpdateSell } from "./components/UpdateSell";
import { useQuery } from "@tanstack/react-query";
import { useFetchById } from "@/app/service/useFetchById";
import { toast } from "sonner";


export default function page({ params }: { params: { sellId: string } }) {

  const {
    data,
    isError,
    isLoading,
} = useFetchById({
    sellId: params.sellId,
    onError: (error) => {
        toast.error("Motor Gagal dimuat", error);
    },
});



  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {isError}</div>;

  return (
    <>
      <div className="container py-8">
        <div className="pb-6">
          <h1 className="text-3xl font-semibold">Update Data !</h1>
        </div>
        <UpdateSell data={data} />
      </div>
    </>
  );
}
