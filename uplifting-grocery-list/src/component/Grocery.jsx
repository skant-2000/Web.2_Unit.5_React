import React, { useState } from 'react'
import GroceryInput from './GroceryInput'
import { v4 } from 'uuid'
import GroceryList from './GroceryList'

export default function Grocery() {

    const [list, setList] = useState([])

    const addToList = (input) => {
        const payload = {
            input,
            id: v4()
        }
        setList([...list, payload])
    }

    const handleDelete = (id) => {
        var restItem = list.filter((item) => item.id !== id)
        setList(restItem)
    }

  return (
    <>
        <GroceryInput inputval={addToList} />
        <GroceryList displayList={list} handleDelete={handleDelete} />
    </>
  )
}
