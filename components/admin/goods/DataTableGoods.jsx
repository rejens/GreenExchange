'use client'
useMemo
import React, { useEffect, useMemo, useReducer, useState } from 'react'
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
  createColumnHelper,
  getSortedRowModel,
  getFilteredRowModel,
} from '@tanstack/react-table'
import Link from 'next/link'
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from 'react-icons/fa'
import { FiPlus } from 'react-icons/fi'
import { RiDeleteBinLine } from 'react-icons/ri'
import { BiEdit, BiPlus } from 'react-icons/bi'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { deleteGoods } from '@/lib/goodsAction'
import moment from 'moment'

const DataTableGoods = ({ defaultData }) => {
  const router = useRouter()
  const [sorting, setSorting] = useState([])
  const [filtering, setFiltering] = useState('')

  const columnHelper = createColumnHelper()

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this goods?')) {
      try {
        const response = await deleteGoods(id)
        toast.success(response.message)
      } catch (error) {
        toast.error(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.response
        )
      } finally {
        router.push('/admin/goods')
        router.refresh()
      }
    } else {
      return
    }
  }

  const columns = [
    columnHelper.accessor((row, index) => index, {
      id: 'sn',
      cell: (info) => <p className='text-black'>{info.getValue() + 1}</p>,
      header: () => <span>S.N.</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('goodsType', {
      id: 'goodsType',
      cell: (info) => (
        <div className='flex gap-2 items-center'>
          <a
            target='_blank'
            href={info.row.original.goodsImage || ''}
            className='avatar flex-shrink-0'
          >
            <img
              className='rounded-full w-10 h-10'
              src={info.row.original.goodsImage || ''}
              alt={info.getValue()}
            />
          </a>
          <p className='text-sm'> {info.getValue()}</p>
        </div>
      ),
      header: () => <span>Goods Type</span>,
      footer: (info) => info.column.type,
    }),
    columnHelper.accessor('name', {
      id: 'name',
      cell: (info) => (
        <h5 className='font-medium text-black'>{info.getValue()}</h5>
      ),
      header: () => <span>Name</span>,
      footer: (info) => info.column.name,
    }),
    columnHelper.accessor('phone', {
      id: 'phone',
      cell: (info) => (
        <h5 className='font-medium text-black'>{info.getValue()}</h5>
      ),
      header: () => <span>Phone</span>,
      footer: (info) => info.column.phone,
    }),
    columnHelper.accessor('pickupTime', {
      id: 'pickupTime',
      cell: (info) => (
        <h5 className='font-medium text-black'>
          {moment(info.row.original.pickupDate).format('LL') +
            ', ' +
            moment(info.getValue()).format('LT')}
        </h5>
      ),
      header: () => <span>Pick Up Time</span>,
      footer: (info) => info.column.pickupTime,
    }),

    columnHelper.accessor('goodsWeight', {
      id: 'goodsWeight',
      cell: (info) => (
        <p className='text-black'>{info.getValue() + ' kg' || 'N/A'}</p>
      ),
      header: () => <span>Weight</span>,
      footer: (info) => info.column.goodsWeight,
    }),
    columnHelper.accessor('type', {
      id: 'type',
      cell: (info) => <p className='text-black'>{info.getValue() || 'N/A'}</p>,
      header: () => <span>Type</span>,
      footer: (info) => info.column.type,
    }),
    columnHelper.accessor('status', {
      id: 'status',
      cell: (info) => <p className='text-black'>{info.getValue() || 'N/A'}</p>,
      header: () => <span>Satus</span>,
      footer: (info) => info.column.status,
    }),
    columnHelper.accessor('action', {
      id: 'action',
      cell: (info) => (
        <div className='flex items-center space-x-3.5'>
          <Link
            href={`/admin/goods/edit/${info.row.original._id}`}
            className='px-3 py-2 text-sm font-medium text-center inline-flex items-center text-white bg-green-600 rounded-lg hover:opacity-95 focus:ring-4 focus:outline-none focus:ring-meta-3 '
          >
            <BiEdit className='me-1 h-[18px] w-[18px]' />
            Edit
          </Link>
          <button
            onClick={() => handleDelete(info.row.original._id)}
            className='px-3 py-2 text-sm font-medium text-center inline-flex items-center text-white bg-red-600 rounded-lg hover:opacity-95 focus:ring-4 focus:outline-none focus:ring-red-600 '
          >
            <RiDeleteBinLine className='me-1 h-[18px] w-[18px]' />
            Delete
          </button>
        </div>
      ),
      header: () => <span></span>,
    }),
  ]

  const [data, setData] = useState(defaultData)

  const table = useReactTable({
    data,
    columns,
    defaultColumn: getCoreRowModel(), // Use defaultColumn instead of getCoreRowModel
    getSortedRowModel: getSortedRowModel(sorting),
    state: {
      sorting,
      globalFilter: filtering, // Combine sorting and filtering in a single state object
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  useEffect(() => {
    setData(defaultData)
  }, [defaultData])

  return (
    <div className='rounded-sm border bg-white px-5 pt-6 pb-2.5 shadow-default  sm:px-7.5 xl:pb-1'>
      <div className='max-w-full overflow-x-auto'>
        <div className='flex mb-5 items-center justify-between'>
          <input
            className='rounded border bg-gray py-3  px-[1.125rem] text-black focus:border-blue-600 focus-visible:outline-none'
            type='text'
            placeholder='Search...'
            value={filtering}
            onChange={(e) => setFiltering(e.target.value)}
          />
        </div>
        <table className='w-full table-auto text-sm'>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className='bg-gray-2 text-left'>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className='py-4 px-4 font-medium text-black cursor-pointer'
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    {/* Code for UP & DOWN sorting */}
                    {
                      {
                        asc: <FaArrowAltCircleUp className='inline ms-1' />,
                        desc: <FaArrowAltCircleDown className='inline ms-1' />,
                      }[header.column.getIsSorted() ?? null]
                    }
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className='text-sm'>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className='border-b border-[#eee] py-5 px-4 pl-9 xl:pl-3'
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className='flex justify-between items-center my-5'>
          <div className='flex gap-2 items-center'>
            <p className='text-sm text-black '>
              Showing{' '}
              <span className='font-medium'>
                {table.getRowModel().rows.length}
              </span>{' '}
              of <span className='font-medium'>{data.length}</span> entries
            </p>
          </div>
          <div className='flex gap-2 items-center'>
            <button
              className='rounded border disabled:bg-black/5 disabled:text-black/50 bg-blue-600 text-white py-2 px-4 focus:border-blue-600 focus-visible:outline-none dark:border-strokedark'
              onClick={() => {
                table.setPageIndex(0)
              }}
              disabled={!table.getCanPreviousPage()}
            >
              First Page
            </button>
            <button
              className='rounded border disabled:bg-black/5 disabled:text-black/50 bg-blue-600 text-white  py-2 px-4  focus:border-blue-600 focus-visible:outline-none dark:border-strokedark '
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              {'<<'}
            </button>
            <button
              className='rounded border disabled:bg-black/5 disabled:text-black/50 bg-blue-600 text-white  py-2 px-4  focus:border-blue-600 focus-visible:outline-none dark:border-strokedark '
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              {'>>'}
            </button>
            <button
              className='rounded border disabled:bg-black/5 disabled:text-black/50 bg-blue-600 text-white  py-2 px-4  focus:border-blue-600 focus-visible:outline-none dark:border-strokedark '
              onClick={() => {
                table.setPageIndex(table.getPageCount() - 1)
              }}
              disabled={!table.getCanNextPage()}
            >
              Last Page
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DataTableGoods
