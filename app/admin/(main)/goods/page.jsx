import Loader from '@/components/Loader'
import Breadcrumb from '@/components/admin/Breadcrumb'
import DataTableGoods from '@/components/admin/goods/DataTableGoods'
import { getAllGoods } from '@/lib/goodsAction'
import React, { Suspense } from 'react'

const AdminGoodsPage = async () => {
  const goods = await getAllGoods()
  return (
    <>
      <Breadcrumb pageNames={['Goods']} hrefs={['/admin/goods']} />

      <Suspense fallback={<Loader />}>
        <DataTableGoods defaultData={goods} />
      </Suspense>
    </>
  )
}

export default AdminGoodsPage
