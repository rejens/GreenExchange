import Loader from '@/components/Loader'
import Breadcrumb from '@/components/admin/Breadcrumb'
import EditTreeForm from '@/components/admin/trees/edit/EditTreeForm'
import { getTreeById } from '@/lib/treesAction'
import React, { Suspense } from 'react'

const EditTreePage = async ({ params: { id } }) => {
  const tree = await getTreeById(id)
  return (
    <>
      <Breadcrumb pageNames={['Trees', 'Edit Tree']} hrefs={['/admin/trees']} />

      <Suspense fallback={<Loader />}>
        <EditTreeForm data={tree} />
      </Suspense>
    </>
  )
}

export default EditTreePage
