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

export const UpdateSell = ({data}: {data: DataBike}) => {

  
  return (
      <div className="grid w-full items-center gap-1.5">
        <form>
          <Label htmlFor="text">Police Number</Label>
          <Input
            type="text"
            id="text"
            placeholder="ex.DN 1234 EJ"
            name="policeNumber"
            value={data.policeNumber}
          />
          {/* <h1>{formik.values.categoryBike}</h1> */}
          <Label htmlFor="text">Category</Label>
          <Select>
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
            value={data.name}
          />
          <Label htmlFor="text">Frame Number</Label>
          <Input
            type="text"
            id="text"
            placeholder="ex.ASJDHKLJADS9029347"
            name="frameNumber"
            value={data.frameNumber}
          />
          <Label htmlFor="text">Price</Label>
          <Input
            type="number"
            id="text"
            placeholder="ex.5.000.000"
            name="price"
            value={data.price}
          />
          <Label htmlFor="text">Capital Price</Label>
          <Input
            type="number"
            id="text"
            placeholder="ex.3.000.000"
            name="capitalPrice"
            value={data.capitalPrice}
          />
          <div className="flex gap-2 justify-end pt-6">
            <Button className="bg-blue-600 hover:bg-blue-800" type="submit">
              Add
            </Button>
            <Button className="bg-red-600 hover:bg-red-800">Back</Button>
          </div>
        </form>
      </div>
  );
};
