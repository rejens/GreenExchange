import Loader from '@/components/Loader'
import Breadcrumb from '@/components/admin/Breadcrumb'
import DataTableGoods from '@/components/admin/goods/DataTableGoods'
import AddTreeForm from '@/components/admin/trees/AddTreeForm'
import DataTableTrees from '@/components/admin/trees/DataTableTrees'
import { getAllTrees } from '@/lib/treesAction'
import React, { Suspense } from 'react'

const AdminTreesPage = async () => {
  const trees = await getAllTrees()

  return (
    <>
      <Breadcrumb pageNames={['Trees']} hrefs={['/admin/trees']} />

      <AddTreeForm />

      <Suspense fallback={<Loader />}>
        <DataTableTrees defaultData={trees} />
      </Suspense>
    </>
  )
}

export default AdminTreesPage
