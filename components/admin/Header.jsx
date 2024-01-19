import React, { useEffect } from 'react'
import DropdownUser from './DropdownUser'
import Link from 'next/link'
import { BiSearch } from 'react-icons/bi'
import { useSession } from 'next-auth/react'
import { RiMenu2Fill } from 'react-icons/ri'

const Header = (props) => {
  return (
    <header className='sticky top-0 z-50 flex w-full bg-white shadow'>
      <div className='flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11'>
        <div className='flex items-center gap-2 sm:gap-4 lg:hidden'>
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls='sidebar'
            onClick={(e) => {
              e.stopPropagation()
              props.setSidebarOpen(!props.sidebarOpen)
            }}
            className='z-[100] block rounded-sm border bg-white p-1.5 shadow-sm lg:hidden'
          >
            <RiMenu2Fill className='h-5.5 w-5.5' />
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}

          <Link className='block flex-shrink-0 lg:hidden' href='/'>
            {/* <img src={'images/logo/logo-icon.svg'} alt='Logo' /> */}
            <h1 className='font-bold text-2xl'>GreenExchange</h1>
          </Link>
        </div>

        {/* <div className='hidden sm:block'>
          <form>
            <div className='relative'>
              <button className='absolute top-1/2 left-0 -translate-y-1/2'>
                <BiSearch className='h-[20px] w-[20px]' />
              </button>

              <input
                type='text'
                placeholder='Type to search...'
                className='w-full bg-transparent pr-4 pl-9 focus:outline-none'
              />
            </div>
          </form>
        </div> */}

        <div className='ml-auto flex items-center gap-3 2xsm:gap-7'>
          <DropdownUser />
        </div>
      </div>
    </header>
  )
}

export default Header
