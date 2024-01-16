"use client";

import React from 'react'
import { twMerge } from 'tailwind-merge'
import { useRouter } from 'next/navigation'
import { Button } from '@/components'
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx'
import { HiHome } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'

interface HeaderProps {
   children: React.ReactNode;
   className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
   const router = useRouter();
   const handleLogout = () => {
      //Todo: Handle logout in the future
   };

   return (
    <div className={twMerge(`h-fit bg-gradient-to-b from-emerald-800 p-6`, className)}>
      <div className='w-full mb-4 flex items-center justify-between'>
        {/* Desktop */}
        <div className='hidden md:flex gap-x-2 items-center'>
          <button onClick={() => router.back()}
             className='rounded-full bg-black flex items-center justify-center hover:opacity-75 transition'>
             <RxCaretLeft size={35} className='text-white' />
          </button>
          <button onClick={() => router.forward()}
             className='rounded-full bg-black flex items-center justify-center hover:opacity-75 transition'>
             <RxCaretRight size={35} className='text-white' />
          </button>
        </div>
        {/* Mobile */}
        <div className='flex md:hidden gap-x-2 items-center'>
          <button onClick={() => {}}
             className='rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition'>
             <HiHome size={20} className='text-black' />
          </button>
          <button onClick={() => {}}
             className='rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition'>
             <BiSearch size={20} className='text-black' />
          </button>
        </div>
        {/* Auth */}
        <div className='flex items-center justify-between gap-x-4'>
         <>
           <div>
              <Button onClick={() => {}} className='bg-transparent text-neutral-300 font-medium'>
                Sign up
              </Button>
           </div>
           <div>
              <Button onClick={() => {}} className='bg-white px-6 py-2'>
                Log in
              </Button>
           </div>
         </>
        </div>
      </div>
      {children}
    </div>
  )
}

export default Header