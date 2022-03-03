import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { STORE_USERDATA } from "../store/actionType";

export default function Login() {
  const [logInput, setLogInput] = useState({});
  const [users, setUsers] = useState([])
  const navigate = useNavigate()
  let dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:3004/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => {
          console.error("Error:", error);
      });
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setLogInput({
      ...logInput,
      [name]: value,
    });
  };

  const handleLogin = () => {
    users.forEach((data) => {
        if(data.userName === logInput.userName && data.password === logInput.password) {
            dispatch({
                type: STORE_USERDATA,
                payload: data.userName
            })
            navigate(`/home`)
        }
        else {
            alert("Invalid User")
        }
    })
  };

  return (
    <div>
      <div>
        <label>User Name: </label>
        <input
          type="text"
          name="userName"
          value={logInput.userName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Password: </label>
        <input
          type="password"
          name="password"
          value={logInput.password}
          onChange={handleChange}
        />
      </div>
      <div>
          <button onClick={handleLogin}>Log In</button>
      </div>
    </div>
  );
}
