import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { v4 as uuid } from "uuid";
import CompletedTodoList from "./CompletedTodoList";
import styles from './Todo.module.css'

export default function Todo() {
  const [list, setList] = useState([]);

  const [complete, setComplete] = useState([]);

  const [toggleComplete, setToggleComplete] = useState(false);

  const addToList = (input) => {
    setList([
      ...list,
      {
        input,
        id: uuid(),
      },
    ]);
  };

  const handleDelete = (id) => {
    const deleteFromList = list.filter((item) => item.id !== id);
    setList(deleteFromList);
  };

  const handleComplete = (comleteItem) => {
    setComplete([...complete, comleteItem]);
    handleDelete(comleteItem.id);
  };

  const toggleShowComplete = () => {
    const toggle = !toggleComplete;
    setToggleComplete(toggle);
  };

  return (
    <div className={styles.main}>
      <TodoInput addToList={addToList} />
      <TodoList
        displayList={list}
        handleDelete={handleDelete}
        handleComplete={handleComplete}
      />
      <button onClick={toggleShowComplete} className={styles.compButton} >ShowCompleted</button>
      {toggleComplete ? (
        <CompletedTodoList showCompleted={complete} />
      ) : undefined}
    </div>
  );
}
