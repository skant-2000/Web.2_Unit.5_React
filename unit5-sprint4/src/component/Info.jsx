import React from 'react'
import { Link } from 'react-router-dom'

export default function Info() {
  return (
    <div style={{marginTop: "100px"}}>
        <h2>Information Related to Registration</h2>
        <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit amet.</li>
        </ul>
        <Link to="/register"><button style={{marginTop: "20px"}}>Register</button></Link>
    </div>
  )
}
