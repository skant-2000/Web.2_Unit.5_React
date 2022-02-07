import React, { useState } from 'react';
import styles from './Todo.module.css'

export default function TodoInput({addToList}) {

    const [input, setInput] = useState("")

    const handleInputChange = (e) => {
        let inputUpdate = e.currentTarget.value
        setInput(inputUpdate)
    }

    const handleInput = () => {
        addToList(input)
        setInput("")
    }

  return <div>
      <input type="text" value={input} placeholder="type something" onChange={handleInputChange} className={styles.input} />
      <button onClick={handleInput} className={styles.add} >Add</button>
  </div>;
}
