import Loader from '@/components/Loader'
import Breadcrumb from '@/components/admin/Breadcrumb'
import EditGoodForm from '@/components/admin/goods/edit/EditGoodForm'
import { getGoodsById } from '@/lib/goodsAction'
import React, { Suspense } from 'react'

const EditGoodPage = async ({ params: { id } }) => {
  const good = await getGoodsById(id)
  return (
    <>
      <Breadcrumb
        pageNames={['Goods', 'Edit Status']}
        hrefs={['/admin', '/admin/goods']}
      />

      <Suspense fallback={<Loader />}>
        <EditGoodForm data={good} />
      </Suspense>
    </>
  )
}

export default EditGoodPage
