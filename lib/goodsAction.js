import axios from 'axios'
import { cache } from 'react'

const getAllGoods = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_NEXTAPP_URL}/api/goods`,
    {
      cache: 'no-store',
    }
  )
  if (response.status !== 200) {
    throw new Error('Failed to fetch goods')
  }
  return response.json()
}

const getGoodsById = async (id) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_NEXTAPP_URL}/api/goods/${id}`,
    {
      cache: 'no-store',
    }
  )
  if (response.status !== 200) {
    throw new Error('Failed to fetch goods')
  }
  return response.json()
}

const createGoods = cache(async (good) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_NEXTAPP_URL}/api/goods`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(good),
    }
  )
  if (response.status !== 201) {
    throw new Error('Failed to create goods')
  }
  return response.json()
})

const deleteGoods = async (id) => {
  const { data } = await axios.delete(
    `${process.env.NEXT_PUBLIC_NEXTAPP_URL}/api/goods/${id}`
  )
  return data
}

const updateGoods = async (good, id) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_NEXTAPP_URL}/api/goods/${id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(good),
    }
  )
  if (response.status !== 200) {
    throw new Error('Failed to update good')
  }
  return response.json()
}

export { getAllGoods, getGoodsById, createGoods, deleteGoods, updateGoods }
