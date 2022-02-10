import React, { useState } from 'react'

export default function GroceryInput({ inputval }) {

    const [input, setInput] = useState("")

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const handleClick = () => {
        inputval(input)
        setInput("")
    }

  return (
    <>
        <input value={input} onChange={(handleInput)} />
        <button onClick={handleClick}>ADD</button>
    </>
  )
}
