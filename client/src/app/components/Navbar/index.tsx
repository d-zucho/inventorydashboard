'use client'
import React from 'react'
import { Bell, Menu, Settings, Sun } from 'lucide-react'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '@/app/redux'
import { setIsSidebarCollapsed } from '@/state'

const Navbar = () => {
  const dispatch = useAppDispatch()
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  )

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))
  }

  return (
    <div className='flex justify-between items-center w-full mb-7'>
      {/* LEFT SIDE */}
      <div className='flex justify-between items-center gap-5'>
        <button
          className='px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100 transition-all duration-300'
          onClick={() => {}}
        >
          <Menu className=' h-4 w-4' />
        </button>

        <div className='relative'>
          <input
            type='search'
            placeholder='Start typing to search groups & products'
            className='pl-10 pr-4 py-2 w-[200px] md:w-80 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500'
          />
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <Bell className='text-gray-500' size={20} />
          </div>
        </div>
      </div>
      {/* RIGHT SIDE */}
      <div className='flex justify-between items-center gap-5'>
        <div className='hidden md:flex justify-between items-center gap-5'>
          <div>
            <button onClick={() => {}}>
              <Sun className='cursor-pointer text-gray-500' size={24} />
            </button>
          </div>
          <div className='relative'>
            <Bell className='cursor-pointer text-gray-500' size={24} />
            <span className='absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full'>
              3
            </span>
          </div>
          <hr className='w-0 h-7 border-solid border-l border-gray-300 mx-3' />
          <div className='flex gap-3 items-center cursor-pointer'>
            <div className='w-9 h-9'>
              image
              <span className='font-semibold'>Danny Libor</span>
            </div>
          </div>
        </div>
        <Link href='/'>
          <Settings className='cursor-pointer text-gray-500' size={24} />
        </Link>
      </div>
    </div>
  )
}

export default Navbar
