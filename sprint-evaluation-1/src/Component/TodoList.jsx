import React from "react";
import styles from './Todo.module.css'

export default function TodoList({ displayList, handleDelete, handleComplete }) {



  return (
    <div className={styles.todoList}>
      <ul>
        {displayList.map((item) => {
          return (
            <div key={item.id}>
              <li>{item.input}</li>
              <button onClick={ () => handleComplete(item)} className={styles.comp} >Complete</button>
              <button onClick={ () => handleDelete(item.id)} className={styles.del} >Delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
