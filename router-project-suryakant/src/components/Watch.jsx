import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./card.module.css";

export default function Watch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/watch")
      .then((res) => res.json())
      .then((datas) => setData(datas));
  }, []);

  return (
    <div className={styles.main}>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <div>
              <img src={item.url} alt="" />
            </div>
            <div>
              <h4>{item.title}</h4>
              <p>Rating: {item.rating}</p>
              <h4>Price: {item.price}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
}