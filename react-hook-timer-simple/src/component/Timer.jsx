import React, { useEffect, useState } from "react";

export default function Timer({ initialTime, endTime }) {

  const [count, setCount] = useState(initialTime);

  useEffect(() => {
      
    const id = setInterval(() => {

        setCount((prev) => {
            if ( prev === endTime ) {
                clearInterval(id)
                return prev
            }
            else {
                return prev+1
            }
        });
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <>
      <h1>Timer</h1>
      <h3>Count: {count}</h3>
    </>
  );
}
