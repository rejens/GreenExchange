'use client'
import { createTree } from '@/lib/treesAction'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const AddTreeForm = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    latitude: '',
    longitude: '',
    numberOfTrees: 1,
    plantedDate: '',
  })
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (
      !formData.latitude ||
      !formData.longitude ||
      !formData.numberOfTrees ||
      !formData.plantedDate
    ) {
      toast.error('Please fill all the fields')
      return
    } else {
      setSubmitting(true)
      try {
        await createTree(formData)
        toast.success('Trees planted successfully')
      } catch (error) {
        console.log('error:::: ', error)
        toast.error(error.message)
      } finally {
        router.push('/admin/trees')
        router.refresh()
        setSubmitting(false)
        setFormData({
          latitude: '',
          longitude: '',
          numberOfTrees: 1,
          plantedDate: '',
        })
      }
    }
  }

  return (
    <div className='flex flex-col gap-9 mb-10'>
      <div className='rounded-sm border border-stroke bg-white shadow '>
        <div className='border-b border-stroke py-4 px-[1.625rem]'>
          <h3 className='font-medium text-black '>Plant Trees</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='p-[1.625rem]'>
            <div className='mb-[1.125rem] flex flex-col gap-6 xl:flex-row'>
              <div className='w-full xl:w-1/2'>
                <label className='mb-2.5 block text-black'>
                  Latitude <span className='text-red-400'>*</span>
                </label>
                <input
                  type='number'
                  id='latitude'
                  value={formData.latitude}
                  onChange={handleChange}
                  placeholder='Enter latitude of your plant'
                  className='w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-blue-600 active:border-blue-600 disabled:cursor-default disabled:bg-whiter'
                />
              </div>
              <div className='w-full xl:w-1/2'>
                <label className='mb-2.5 block text-black'>
                  Longitude <span className='text-red-400'>*</span>
                </label>
                <input
                  type='number'
                  id='longitude'
                  value={formData.longitude}
                  onChange={handleChange}
                  placeholder='Enter latitude of your plant'
                  className='w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-blue-600 active:border-blue-600 disabled:cursor-default disabled:bg-whiter'
                />
              </div>
            </div>
            <div className='mb-[1.125rem] flex flex-col gap-6 xl:flex-row'>
              <div className='w-full xl:w-1/2'>
                <label className='mb-2.5 block text-black'>
                  Number of Plants <span className='text-red-400'>*</span>
                </label>
                <input
                  type='tel'
                  id='numberOfTrees'
                  value={formData.numberOfTrees}
                  onChange={handleChange}
                  placeholder='Enter number of plants'
                  className='w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-blue-600 active:border-blue-600 disabled:cursor-default disabled:bg-whiter'
                />
              </div>
              <div className='w-full xl:w-1/2'>
                <label className='mb-2.5 block text-black'>
                  Planted Date <span className='text-red-400'>*</span>
                </label>
                <input
                  type='date'
                  id='plantedDate'
                  value={formData.plantedDate}
                  onChange={handleChange}
                  placeholder='Enter plantedDate of your customer'
                  className='w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-blue-600 active:border-blue-600 disabled:cursor-default disabled:bg-whiter'
                />
              </div>
            </div>

            <button
              type='submit'
              className='flex w-full justify-center items-center gap-4 rounded bg-blue-600 p-3 font-medium text-white disabled:opacity-50'
              disabled={submitting}
            >
              {submitting && (
                <AiOutlineLoading3Quarters className='animate-spin' />
              )}
              Plant Trees
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddTreeForm
