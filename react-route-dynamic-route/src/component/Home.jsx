import React from 'react'
import { useNavigate } from "react-router-dom"
import  styles from "./Files.module.css"

export default function Home() {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/products`)
    }

  return (
    <div>
        <button className={styles.productsButton} onClick={handleClick}>Products</button>
    </div>
  )
}
