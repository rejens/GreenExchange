'use client'
import React, { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import SidebarLinkGroup from './SidebarLinkGroup'
import { RxDashboard } from 'react-icons/rx'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { FaChevronDown } from 'react-icons/fa'
import { BiLogOut } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'
import { CiUser } from 'react-icons/ci'
import { FaStore } from 'react-icons/fa'
import { BsBag, BsTruck } from 'react-icons/bs'
import { LuStore } from 'react-icons/lu'
import { LiaShippingFastSolid } from 'react-icons/lia'
import { HiOutlineUsers } from 'react-icons/hi'
import useLocalStorage from 'use-local-storage'
import { signOut, useSession } from 'next-auth/react'

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const { data: session } = useSession()
  const pathname = usePathname()

  const trigger = useRef(null)
  const sidebar = useRef(null)

  const [sidebarExpanded, setSidebarExpanded] = useLocalStorage(
    'sidebar-expanded',
    'true'
  )

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return
      setSidebarOpen(false)
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  useEffect(() => {
    setSidebarExpanded(sidebarExpanded.toString())
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded')
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded')
    }
  }, [sidebarExpanded])

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-50 flex h-screen w-[18.125rem] flex-col overflow-y-hidden bg-white text-black/50 duration-300 ease-linear lg:static lg:translate-x-0 transition-transform shadow ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className='flex items-center justify-between gap-2 px-6 py-[1.375rem] lg:py-[1.625rem] text-black'>
        <Link href='/' className='font-bold text-3xl'>
          GreenExchange
        </Link>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls='sidebar'
          aria-expanded={sidebarOpen}
          className='block lg:hidden'
        >
          <AiOutlineArrowLeft className='h-[25px] w-[30px] ' />
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className='no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear'>
        {/* <!-- Sidebar Menu --> */}
        <nav className='mt-5 py-4 px-4 lg:mt-9 lg:px-6'>
          {/* <!-- Menu Group --> */}
          <div>
            <h3 className='mb-4 ml-4 text-sm font-semibold text-bodydark2'>
              MENU
            </h3>

            <ul className='mb-6 flex flex-col gap-1.5'>
              <li>
                <Link
                  href='/admin/dashboard'
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out hover:bg-bodydark1 dark:hover:bg-meta-4 ${
                    pathname === '/admin' ? 'bg-gray dark:bg-graydark' : ''
                  }`}
                >
                  <RxDashboard className='h-[18px] w-[18px]' />
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href='/admin/goods'
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out hover:bg-bodydark1 dark:hover:bg-meta-4 ${
                    pathname === '/admin/goods'
                      ? 'bg-gray dark:bg-graydark'
                      : ''
                  }`}
                >
                  <BsBag className='h-[18px] w-[18px]' />
                  Goods
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='mb-4 ml-4 text-sm font-semibold text-black/50'>
              OTHERS
            </h3>

            <ul className='mb-6 flex flex-col gap-1.5'>
              <li>
                <Link
                  href='/settings'
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium  duration-300 ease-in-out hover:bg-bodydark1 dark:hover:bg-meta-4 ${
                    pathname === '/settings' ? 'bg-gray dark:bg-graydark' : ''
                  }`}
                >
                  <FiSettings className='h-[18px] w-[18px]' />
                  Settings
                </Link>
              </li>
              <li>
                <button
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium  duration-300 ease-in-out hover:bg-bodydark1 dark:hover:bg-meta-4 w-full`}
                  onClick={() => signOut()}
                >
                  <BiLogOut className='h-[18px] w-[18px]' />
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  )
}

export default Sidebar
