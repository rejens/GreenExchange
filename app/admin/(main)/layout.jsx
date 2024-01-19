import Provider from '@/components/providers/Provider'
import React from 'react'
import { lazy } from 'react'
import { Toaster } from 'react-hot-toast'

const DefaultLayout = lazy(() => import('@/components/layouts/DefaultLayout'))

const AdminLayout = ({ children }) => {
  return (
    <Provider>
      <DefaultLayout>
        <Toaster position='top-center' reverseOrder={false} />
        {children}
      </DefaultLayout>
    </Provider>
  )
}

export default AdminLayout
