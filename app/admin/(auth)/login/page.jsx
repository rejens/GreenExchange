'use client'
import Link from 'next/link'
import { BsEnvelope } from 'react-icons/bs'
import { FiUser } from 'react-icons/fi'
import { TfiLock } from 'react-icons/tfi'
import { useSession, signIn } from 'next-auth/react'
import { useState } from 'react'
import toast from 'react-hot-toast'

const AdminAuthPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.email || !formData.password) {
      return toast.error('Please fill all the fields')
    } else {
      try {
        await signIn('credentials', {
          email: formData.email,
          password: formData.password,
        })
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <>
      <div className='rounded-sm bg-white '>
        <div className='flex flex-wrap items-center h-screen justify-center'>
          <div className='w-full shadow xl:w-1/3 xl:border-l-2'>
            <div className='w-full p-4 sm:p-12.5 xl:p-17.5'>
              <span className='mb-1.5 block font-medium text-green-600'>
                GreenExchange
              </span>
              <h2 className='mb-9 text-2xl font-bold text-black sm:text-title-xl2'>
                Sign In to Admin Panel
              </h2>

              <form>
                <div className='mb-4'>
                  <label className='mb-2.5 block font-medium text-black '>
                    Email
                  </label>
                  <div className='relative'>
                    <input
                      type='email'
                      placeholder='Enter your email'
                      className='w-full rounded-lg border bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none'
                    />

                    <span className='absolute right-4 top-4'>
                      <BsEnvelope className='h-[22px] w-[22px]' />
                    </span>
                  </div>
                </div>

                <div className='mb-6'>
                  <label className='mb-2.5 block font-medium text-black'>
                    Password
                  </label>
                  <div className='relative'>
                    <input
                      type='password'
                      placeholder='6+ Characters, 1 Capital letter'
                      className='w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none '
                    />

                    <span className='absolute right-4 top-4'>
                      <TfiLock className='h-[22px] w-[22px]' />
                    </span>
                  </div>
                </div>

                <div className='mb-5'>
                  <input
                    type='submit'
                    value='Sign In'
                    className='w-full cursor-pointer rounded-lg border border-blue-600 bg-blue-600 p-4 text-white transition hover:bg-opacity-90'
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminAuthPage
