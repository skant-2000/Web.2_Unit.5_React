import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Files.module.css";

export default function Product() {
  const params = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);

  return (
    <div className={styles.product}>
        <h4>Product by - {data.brand}</h4>
      <div>
        <img src={`${data.url}`} alt="" />
      </div>
      <h3>{data.name}</h3>
      <h2>{data.price}</h2>
    </div>
  );
}
