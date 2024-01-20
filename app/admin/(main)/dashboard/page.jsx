import AdminCards from '@/components/admin/AdminCards'
import React from 'react'

const AdminDashboardPage = () => {
  return (
    <>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5'>
        <AdminCards />
      </div>
    </>
  )
}

export default AdminDashboardPage
