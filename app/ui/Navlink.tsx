"use client"
import React, { useState } from 'react'
import { NavLink } from '../utils/data'
import Link from 'next/link'
import clsx from 'clsx'

export const Navlink = () => {
    // const [selectedPage,setSelectedPage] = useState("Dashboard")
  return (
    <ul className="flex items-center font-medium gap-3">
          {NavLink.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className={clsx(
                // selectedPage === item.tittle ? "bg-gray-100 p-1 rounded-md" : ""
              )}
              // onClick={() => setSelectedPage(item.tittle)}
            >
              {item.tittle}
            </Link>
          ))}
        </ul>
  )
}
