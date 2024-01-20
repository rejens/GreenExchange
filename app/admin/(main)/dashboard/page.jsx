import Loader from '@/components/Loader'
import AdminCards from '@/components/admin/AdminCards'
import dynamic from 'next/dynamic'
import React, { Suspense } from 'react'

const Leafletmap = dynamic(() => import('@/components/layouts/Leafletmap'), {
  ssr: false,
})

const AdminDashboardPage = () => {
  return (
    <>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5'>
        <AdminCards />
      </div>
      <Suspense fallback={<Loader />}>
        <div className='mt-4'>
          <Leafletmap />
        </div>
      </Suspense>
      <div className='mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5'></div>
    </>
  )
}

export default AdminDashboardPage
