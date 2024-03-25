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

export default function InputBike() {
  return (
    <div className="grid w-full items-center gap-1.5">
      <Label htmlFor="text">Police Number</Label>
      <Input type="text" id="text" placeholder="ex.DN 1234 EJ" />
      <Label htmlFor="text">Category</Label>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select Merk" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Merk</SelectLabel>
            <SelectItem value="apple">Yamaha</SelectItem>
            <SelectItem value="banana">Honda</SelectItem>
            <SelectItem value="blueberry">Suzuki</SelectItem>
            <SelectItem value="grapes">Kawasaki</SelectItem>
            <SelectItem value="pineapple">Vespa</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Label htmlFor="text">Bike Name</Label>
      <Input type="text" id="text" placeholder="ex.Mio Fino 125" />
      <Label htmlFor="text">Frame Number</Label>
      <Input type="text" id="text" placeholder="ex.ASJDHKLJADS9029347" />
      <Label htmlFor="text">Price</Label>
      <Input type="number" id="text" placeholder="ex.5.000.000" />
      <div className="flex gap-2 justify-end">
        <Button className="bg-blue-600 hover:bg-blue-800">Add</Button>
        <Button className="bg-red-600 hover:bg-red-800">Back</Button>
      </div>
    </div>
  );
}
