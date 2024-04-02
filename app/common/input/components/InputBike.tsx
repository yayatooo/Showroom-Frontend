"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { Field, useFormik } from "formik";
import { postDataSells } from "@/app/service/postDataSells";
import fetchSellsBike from "@/app/service/getDataSells";
import axios from "axios";
import { SelectOptionCategory } from "@/app/utils/data";
import { toast, Toaster } from "sonner";

interface FormValues {
  capitalPrice: number;
  categoryBike: string;
  frameNumber: string;
  name: string;
  policeNumber: string;
  price: number;
}

const initialValues: FormValues = {
  policeNumber: "",
  categoryBike: "",
  capitalPrice: 0,
  name: "",
  frameNumber: "",
  price: 0,
};

export default function InputBike() {
  const formik = useFormik({
    initialValues,
    onSubmit: async () => {
     
      try {
        await mutate();
        toast.success("Motor Berhasil ditambah");
        formik.resetForm(); // Corrected call to resetForm
      } catch (error) {
        toast.error("Data Tidak Berhasil Ditambah");
      }
    },
  });
  

  const { mutate } = useMutation({
    mutationFn: async () => {
      const { policeNumber, categoryBike, name, frameNumber } = formik.values;
      const capitalPrice = formik.values.capitalPrice.toString();
      const price = formik.values.price.toString();

      const response = await axios.post("http://localhost:5000/sell/", {
        policeNumber,
        categoryBike,
        capitalPrice,
        name,
        frameNumber,
        price,
      });

      return response;
    },
  });

  console.log(mutate);

  const handleChange = (event: any) => {
    formik.setFieldValue(event.target.name, event.target.value);
  };

  const handleSelect = (selectedValue: string) => {
    formik.setFieldValue("categoryBike", selectedValue);
  };

  return (
    <div className="grid w-full items-center gap-1.5">
      <form onSubmit={formik.handleSubmit}>
        <Label htmlFor="text">Police Number</Label>
        <Input
          type="text"
          id="text"
          placeholder="ex.DN 1234 EJ"
          name="policeNumber"
          onChange={handleChange}
          value={formik.values.policeNumber}
        />
        {/* <h1>{formik.values.categoryBike}</h1> */}
        <Label htmlFor="text">Category</Label>
        <Select onValueChange={handleSelect}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Merk" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Merk</SelectLabel>
              {SelectOptionCategory.map((item) => (
                <SelectItem
                  value={item.value}
                  key={item.id}
                >
                  {item.value}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Label htmlFor="text">Bike Name</Label>
        <Input
          type="text"
          id="text"
          placeholder="ex.Mio Fino 125"
          name="name"
          onChange={handleChange}
          value={formik.values.name}
        />
        <Label htmlFor="text">Frame Number</Label>
        <Input
          type="text"
          id="text"
          placeholder="ex.ASJDHKLJADS9029347"
          name="frameNumber"
          onChange={handleChange}
          value={formik.values.frameNumber}
        />
        <Label htmlFor="text">Price</Label>
        <Input
          type="number"
          id="text"
          placeholder="ex.5.000.000"
          name="price"
          onChange={handleChange}
          value={formik.values.price}
        />
        <Label htmlFor="text">Capital Price</Label>
        <Input
          type="number"
          id="text"
          placeholder="ex.3.000.000"
          name="capitalPrice"
          onChange={handleChange}
          value={formik.values.capitalPrice}
        />
        <div className="flex gap-2 justify-end pt-6">
          <Button className="bg-blue-600 hover:bg-blue-800" type="submit">
            Add
          </Button>
          <Button className="bg-red-600 hover:bg-red-800">
            <Toaster richColors position="top-center" />
            Back
          </Button>
        </div>
      </form>
    </div>
  );
}
