import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from './LoginForm'

export default function Home() {
  return (
    <div>
        <nav>
        <Link to="/prerequsite"><button>SignUp</button></Link>
        </nav>
        <LoginForm />
    </div>
  )
}
