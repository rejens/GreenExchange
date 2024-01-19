import DefaultLayout from '@/components/layouts/DefaultLayout'
import Provider from '@/components/providers/Provider'
import Theme from '@/components/providers/Theme'
import React from 'react'
import { lazy } from 'react'
import { Toaster } from 'react-hot-toast'

const AdminLayout = ({ children }) => {
  return (
    <Provider>
      <Theme>
        <DefaultLayout>
          <Toaster position='top-center' reverseOrder={false} />
          {children}
        </DefaultLayout>
      </Theme>
    </Provider>
  )
}

export default AdminLayout
