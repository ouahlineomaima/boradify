import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Logo = () => {
  return (
    <Link href="/">
        <div className='hover:opacity-75 transition items-center gap-x-2 hidden md:flex'>
            <Image src="/logo.svg" alt='Logo' height={30} width={30}/>
            <p className='text-lg font-bold text-neutral-700 pb-1'>Boardify</p>
        </div>
    </Link>
  )
}
