import React from 'react'
import { IoEyeOutline } from 'react-icons/io5'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { BsHandbag } from 'react-icons/bs'
import { HiOutlineUsers } from 'react-icons/hi'

export const datas = [
  {
    id: 1,
    title: 'Total views',
    value: '$3.456K',
    percentage: '0.43%',
    icon: IoEyeOutline,
    isUp: true,
  },
  {
    id: 2,
    title: 'Total Profit',
    value: '$45,2K',
    percentage: '4.35%',
    icon: HiOutlineShoppingCart,
    isUp: true,
  },
  {
    id: 3,
    title: 'Total Product',
    value: '2.45',
    percentage: '2.59%',
    icon: BsHandbag,
    isUp: true,
  },
  {
    id: 4,
    title: 'Total Users',
    value: '3.456',
    percentage: '0.95%',
    icon: HiOutlineUsers,
    isUp: false,
  },
]

const AdminCards = () => {
  return datas?.map((data) => (
    <div className='rounded-sm border border-stroke bg-white py-6 px-[1.875rem] shadow'>
      <div className='flex h-[2.875rem] w-[2.875rem] items-center justify-center rounded-full bg-[#EFF2F7]  text-[#3C50E0]'>
        <data.icon className=' w-[20px] h-[25px]' />
      </div>

      <div className='mt-4 flex items-end justify-between'>
        <div>
          <h4 className='text-md font-bold text-black/70'>{data.value}</h4>
          <span className='text-sm font-medium'>{data.title}</span>
        </div>

        <span
          className={`flex items-center gap-1 text-sm font-medium ${
            data.isUp ? 'text-[#10B981]' : 'text-[#259AE6]'
          }`}
        >
          {data.percentage}
          <AiOutlineArrowUp
            className={`w-[15px] h-[14px] ${
              data.isUp
                ? 'rotate-0 fill-[#10B981]'
                : 'rotate-180 fill-[#259AE6]'
            }`}
          />
        </span>
      </div>
    </div>
  ))
}

export default AdminCards
