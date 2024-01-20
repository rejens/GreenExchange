import axios from 'axios'
import { cache } from 'react'

const getAllTrees = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_NEXTAPP_URL}/api/trees`,
    {
      cache: 'no-store',
    }
  )
  if (response.status !== 200) {
    throw new Error('Failed to fetch trees')
  }
  return response.json()
}

const getTreeById = async (id) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_NEXTAPP_URL}/api/trees/${id}`,
    {
      cache: 'no-store',
    }
  )
  if (response.status !== 200) {
    throw new Error('Failed to fetch trees')
  }
  return response.json()
}

const createTree = cache(async (tree) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_NEXTAPP_URL}/api/trees`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tree),
    }
  )
  if (response.status !== 201) {
    throw new Error('Failed to create trees')
  }
  return response.json()
})

const deleteTree = async (id) => {
  const { data } = await axios.delete(
    `${process.env.NEXT_PUBLIC_NEXTAPP_URL}/api/trees/${id}`
  )
  return data
}

const updateTree = async (tree, id) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_NEXTAPP_URL}/api/trees/${id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tree),
    }
  )
  if (response.status !== 200) {
    throw new Error('Failed to update tree')
  }
  return response.json()
}

export { getAllTrees, getTreeById, createTree, deleteTree, updateTree }
