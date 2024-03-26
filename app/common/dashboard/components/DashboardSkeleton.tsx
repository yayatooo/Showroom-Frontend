import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { Card,CardContent,CardTitle,CardHeader } from '@/components/ui/card'
import { TbCurrencyDollar } from "react-icons/tb";

export const DashboardSkeleton = () => {
  return (
    <Card className="w-full my-4 p-6">
    <CardContent className="p-0 flex justify-between">
      <Skeleton className='h-[20px] w-[80px]' />
      <p><TbCurrencyDollar /></p>
    </CardContent>
    <CardHeader className="pt-3 px-0 pb-0">
      <Skeleton className='h-[35px] w-[340px]' />
    </CardHeader>
  </Card>
  )
}
