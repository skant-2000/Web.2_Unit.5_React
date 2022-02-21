import React, { useState } from 'react'

export default function LoginForm() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLoginEmailChange = (e) => {
        const data = e.target.value
        setEmail(data)
        console.log(email)
    }

    const handleLoginPasswordChange = (e) => {
        const data = e.target.value
        setPassword(data)
        console.log(password)
    }

  return (
    <div style={{marginTop: "10px"}}>
        <div style={{marginTop: "100px"}}>
            <label>Email: </label>
            <input type="email" value={email} onChange={handleLoginEmailChange} />
        </div>
        <div style={{marginTop: "10px"}}>
            <label>Password: </label>
            <input type="password" value={password} onChange={handleLoginPasswordChange} />
        </div>
        <div style={{marginTop: "10px"}}>
            <button>LogIn</button>
        </div>
    </div>
  )
}
