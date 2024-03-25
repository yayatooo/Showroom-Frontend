import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { Button } from '@/components/ui/button'
  

export default function TableSold() {
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
    <TableRow>
      <TableCell className="font-medium">DN 1020 EE</TableCell>
      <TableCell>Yamaha</TableCell>
      <TableCell>Filano 2024</TableCell>
      <TableCell>JSADHJASD2901309</TableCell>
      <TableCell>Rp. 20.000.000</TableCell>
      <TableCell className="flex gap-3 justify-end">
        <Button className='bg-red-600 hover:bg-red-800'>Delete</Button>
        <Button className='bg-yellow-500 hover:bg-yellow-700'>Edit</Button>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>

  )
}
