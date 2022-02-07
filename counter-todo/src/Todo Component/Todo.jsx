import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { v4 } from "uuid"

export default function Todo() {

    const [todos, setTodos] = useState([])

    const addInput = (input) => {
        setTodos([...todos, {
            input,
            id: v4()
        }])
    }
    console.log(todos)

  return <div>
      <TodoInput addInput={addInput} />
      <TodoList printTodos={todos} />
  </div>;
}