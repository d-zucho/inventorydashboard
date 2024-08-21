'use client'
import { useAppDispatch, useAppSelector } from '@/app/redux'
import { setIsSidebarCollapsed } from '@/state'
import { Menu } from 'lucide-react'
import React from 'react'

const Sidebar = () => {
  const dispatch = useAppDispatch()
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  )

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))
  }
  // to toggle the sidebar, we dispatch the setIsSidebarCollapsed action with the opposite of the current isSidebarCollapsed value
  // the better way to do is to use the setIsSidebarCollapsed action creator that we created in the globalSlice

  const sidebarClassNames = `fixed flex flex-col ${
    isSidebarCollapsed ? 'w-0 md:w-16' : 'w-72 md:w-64'
  } bg-white transition-all duration-300 overflow-hidden shadow-md h-full z-40`

  return (
    <aside className={sidebarClassNames}>
      <div
        className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${
          isSidebarCollapsed ? 'px-5' : 'px-8'
        }`}
      >
        <div>logo</div>
        <h1
          className={`font-extrabold text-2xl ${
            isSidebarCollapsed ? 'hidden' : 'block'
          }`}
        >
          DStock
        </h1>
        <button
          className='md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100'
          onClick={toggleSidebar}
        >
          <Menu className='w-4 h-4' />
        </button>
      </div>

      {/* LINKS */}
      <div className='flex-grow mt-8'>{/* LINKS HERE */}</div>
      {/* Footer */}
      <footer>
        <p className='text-center text-xs text-gray-500'>&copy; 2024 Dstock</p>
      </footer>
    </aside>
  )
}

export default Sidebar
