import React from 'react';
import styles from './Todo.module.css'

export default function CompletedTodoList({ showCompleted }) {
  return <div className={styles.completed}>
      <h2>Completed</h2>
      <ul>
          {showCompleted.map((item) => {
            return  <li key={item.id} >{item.input}</li>
          })}
      </ul>
  </div>;
}
