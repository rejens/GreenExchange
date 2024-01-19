import React, { useEffect } from 'react'
import DropdownUser from './DropdownUser'
import Link from 'next/link'
import { BiSearch } from 'react-icons/bi'
import { useSession } from 'next-auth/react'
import DropdownNotification from './DropdownNotification'

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
            <span className='relative block h-5.5 w-5.5 cursor-pointer'>
              <span className='absolute right-0 h-full w-full'>
                <span
                  className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out ${
                    !props.sidebarOpen && '!w-full delay-300'
                  }`}
                ></span>
                <span
                  className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out ${
                    !props.sidebarOpen && 'delay-400 !w-full'
                  }`}
                ></span>
                <span
                  className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out ${
                    !props.sidebarOpen && '!w-full delay-500'
                  }`}
                ></span>
              </span>
              <span className='absolute right-0 h-full w-full rotate-45'>
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out  ${
                    !props.sidebarOpen && '!h-0 !delay-[0]'
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out  ${
                    !props.sidebarOpen && '!h-0 !delay-200'
                  }`}
                ></span>
              </span>
            </span>
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
