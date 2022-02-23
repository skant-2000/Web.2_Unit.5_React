import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import  styles from "./Files.module.css"

export default function Products() {

    const [list, setList] = useState([])

    const navigate = useNavigate()

    const handleClick = (id) => {
        navigate(`/products/${id}`)
    }

    useEffect(() =>  {
        fetch(`http://localhost:3000/products`)
        .then((res) => res.json())
        .then((data) => setList(data))
    },[])

  return (
    <div className={styles.productsList}>
        {list.map((elem) => {
            return (
                <div key={elem.id} className={styles.productsListDiv} >
                    <div>
                        <img src={`${elem.url}`} alt="" />
                    </div>
                    <h3>{elem.name}</h3>
                    <p>{elem.price}</p>
                    <button onClick={() => handleClick(elem.id)}>More Details</button>
                </div>
            )
        })}
    </div>
  )
}
