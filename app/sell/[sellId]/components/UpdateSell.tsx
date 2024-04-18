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
import { SelectOptionCategory } from "@/app/utils/data";
import { DataBike } from "@/app/type/dataBike";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import axios from "axios";
import { toast, Toaster } from "sonner";
import { useRouter } from "next/navigation";

interface FormValues {
  _id: string;
  capitalPrice: number;
  categoryBike: string;
  frameNumber: string;
  name: string;
  policeNumber: string;
  price: number;
}

export const UpdateSell = ({ data }: { data: DataBike }) => {
  const router = useRouter();
  console.log("Data in UpdateSell component:", data);

  const initialValues: FormValues = {
    _id: data._id,
    policeNumber: data.policeNumber,
    categoryBike: data.category.name,
    capitalPrice: data.capitalPrice,
    name: data.name,
    frameNumber: data.frameNumber,
    price: data.price,
  };

  const formik = useFormik({
    initialValues,
    onSubmit: async () => {
      try {
        await mutate();
        toast.info("Data Motor Berhasil Diubah");
        router.push("/sell");
        // formik.resetForm(); // Corrected call to resetForm
      } catch (error) {
        toast.error("Data Tidak Berhasil Diubah");
      }
    },
  });

  const { mutate } = useMutation({
    mutationFn: async () => {
      const { _id, policeNumber, categoryBike, name, frameNumber } =
        formik.values;
      const capitalPrice = formik.values.capitalPrice.toString();
      const price = formik.values.price.toString();

      const url = `http://localhost:5000/sell/${_id}`;

      const response = await axios.patch(url, {
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
          value={formik.values.policeNumber}
          onChange={handleChange}
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
                <SelectItem value={item.value} key={item.id}>
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
          value={formik.values.name}
          onChange={handleChange}
        />
        <Label htmlFor="text">Frame Number</Label>
        <Input
          type="text"
          id="text"
          placeholder="ex.ASJDHKLJADS9029347"
          name="frameNumber"
          value={formik.values.frameNumber}
          onChange={handleChange}
        />
        <Label htmlFor="text">Price</Label>
        <Input
          type="number"
          id="text"
          placeholder="ex.5.000.000"
          name="price"
          value={formik.values.price}
          onChange={handleChange}
        />
        <Label htmlFor="text">Capital Price</Label>
        <Input
          type="number"
          id="text"
          placeholder="ex.3.000.000"
          name="capitalPrice"
          value={formik.values.capitalPrice}
          onChange={handleChange}
        />
        <div className="flex gap-2 justify-end pt-6">
          <Button className="bg-blue-600 hover:bg-blue-800" type="submit">
            Update
          </Button>
          <Button className="bg-red-600 hover:bg-red-800">Back</Button>
        </div>
      </form>
    </div>
  );
};
