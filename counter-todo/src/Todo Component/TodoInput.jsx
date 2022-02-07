import React, { useState } from 'react';
import styles from "./Todo.module.css"

export default function TodoInput({addInput}) {

  const [input, setInput] = useState("")

  const handleInputChange = (e) => {
    let inputVla = e.currentTarget.value
    setInput(inputVla)
  }

  const handleClick = () => {
    addInput(input)
  }

  return <div className={styles.input}>
    <div>
      <input placeholder='type something' value={input} onChange={handleInputChange} />
    </div>
    <div>
      <button onClick={handleClick}>Add</button>
    </div>
  </div>;
}