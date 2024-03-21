import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export const Logo = () => {
  return (
    <Link href="/" className='font-semibold text-2xl'><Image src="/logo.png" alt='logo' width={35} height={35} /></Link>
  )
}
