import React, { useState } from "react";

export default function Register() {
  const [regData, setRegData] = useState([]);

  const handleRegDataChange = (e) => {
    const { name, value } = e.currentTarget;

    setRegData({
      ...regData,
      [name]: value,
    });
  };

  const handleRegister = (regData) => {
    fetch("http://localhost:3000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(regData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  console.log(JSON.stringify(regData));

  return (
    <div>
      <div>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={regData.name}
          onChange={handleRegDataChange}
        />
      </div>
      <div>
        <label>E-mail: </label>
        <input
          type="email"
          name="email"
          value={regData.email}
          onChange={handleRegDataChange}
        />
      </div>
      <div>
        <label>Password: </label>
        <input
          type="password"
          name="password"
          value={regData.password}
          onChange={handleRegDataChange}
        />
      </div>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}
