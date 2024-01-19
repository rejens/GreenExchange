import Breadcrumb from '@/components/admin/Breadcrumb'
import DataTableGoods from '@/components/admin/goods/DataTableGoods'
import { getAllGoods } from '@/lib/goodsAction'
import React from 'react'

const AdminGoodsPage = async () => {
  const goods = await getAllGoods()
  console.log(goods)
  return (
    <>
      <Breadcrumb pageNames={['Goods']} hrefs={['/admin/goods']} />

      <DataTableGoods defaultData={goods} />
    </>
  )
}

export default AdminGoodsPage
