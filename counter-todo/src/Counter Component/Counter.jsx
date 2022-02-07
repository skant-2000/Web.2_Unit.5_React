import React, { useState } from 'react';
import styles from "./Counter.module.css"

export default function Counter() {

    const [count, setCount] = useState(0)

  return <div className={styles.counter}>
      <h2>Count</h2>
      <h2>{count}</h2>
      <button onClick={() => {setCount(count-1)}} className={styles.dec}>Decrement</button>
      <button onClick={() => {setCount(count+1)}} className={styles.inc}>Increment</button>
      <button onClick={() => {setCount(count*2)}}>Double</button>
  </div>;
}
