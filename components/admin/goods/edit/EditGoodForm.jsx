'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { FaChevronDown } from 'react-icons/fa'
import { toast } from 'react-hot-toast'
import { updateGoods } from '@/lib/goodsAction'

const EditGoodForm = ({ data }) => {
  const router = useRouter()
  const [status, setStatus] = useState(data?.status || '')
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    setStatus(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!status) {
      toast.error('Please fill all the fields')
      return
    } else {
      setSubmitting(true)
      try {
        await updateGoods(
          {
            status,
          },
          data._id
        )
        toast.success('Status updated successfully')
      } catch (error) {
        toast.error(error.message)
      } finally {
        router.push('/admin/goods')
        router.refresh()
        setSubmitting(false)
        setStatus('')
      }
    }
  }

  useEffect(() => {
    if (!data._id) {
      router.push('/admin/goods')
    }
  }, [data])

  return (
    <div className='flex flex-col gap-9 mb-10'>
      <div className='rounded-sm border border-stroke bg-white shadow'>
        <div className='border-b border-stroke py-4 px-[1.625rem]'>
          <h3 className='font-medium text-black '>Edit Status</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='p-[1.625rem]'>
            <div className='mb-[1.125rem] flex flex-col gap-6 xl:flex-row'>
              <div className='w-full xl:w-1/2'>
                <label className='mb-2.5 block text-black'>
                  Edit Status <span className='text-red-400'>*</span>
                </label>

                <select
                  className='w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-blue-600 active:border-blue-600 disabled:cursor-default disabled:bg-whiter'
                  value={status}
                  onChange={handleChange}
                >
                  <option value=''>Select status</option>
                  <option value='Pending'>Pending</option>
                  <option value='Received'>Received</option>
                  <option value='Sent'>Sent</option>
                </select>
              </div>
            </div>

            <button
              type='submit'
              className='flex w-full justify-center items-center gap-4 rounded bg-blue-600 p-3 font-medium text-white/90 disabled:opacity-50'
              disabled={submitting}
            >
              {submitting && (
                <AiOutlineLoading3Quarters className='animate-spin' />
              )}
              Update Status
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditGoodForm
