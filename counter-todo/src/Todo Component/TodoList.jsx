import React from 'react';
import styles from "./Todo.module.css"

export default function TodoList({printTodos}) {
  return <div className={styles.todoDiv} >
      <ul>
          {printTodos.map((item) => {
            return  <li key={item.id}>{item.input}</li>
          })}
      </ul>
  </div>;
}