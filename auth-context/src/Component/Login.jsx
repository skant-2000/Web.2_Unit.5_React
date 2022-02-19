import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export default function Login() {
  const { setShowLogin, showSignout, setShowSignout } = useContext(AuthContext);

  const [logInput, setLogInput] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLogInput({
      ...logInput,
      [name]: value,
    });
  };

  const handleLogin = () => {
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(logInput),
    })
      .then((res) => res.json())
      .then((data) => {
        data.token
          ? setShowSignout((prev) => !prev)
          : alert("Enter Valid Details");
      })
      .then(setShowLogin((prev) => !prev))
      .catch((err) => {
        alert("Someting Went Wrong");
      });
  };

  return (
    <div>
      {!showSignout && (
        <div>
          <div>
            E-mail:{" "}
            <input
              type="text"
              name="email"
              value={logInput.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            Password:{" "}
            <input
              type="password"
              name="password"
              value={logInput.password}
              onChange={handleInputChange}
            />
          </div>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}
