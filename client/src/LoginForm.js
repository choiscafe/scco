import React, { useState } from "react";
import {useHistory} from 'react-router-dom'

function LoginForm({ updateUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory()

  function onSubmit(e) {
    e.preventDefault();
    const user = {
      email, password
    }
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    })
    .then(r => {
      if (r.ok) {
        r.json().then(user => {
          updateUser(user)
          history.push(`/users/${user.id}`)
      })
     } else {
        r.json().then((errorData) => setErrors(Object.entries(errorData.errors).map(e=> `${e[0]} ${e[1]}`)));
      }
    })
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>Sign in to your account</h1>
        <label htmlFor="email">Email</label>{" "}
        <input
          type="text"
          id="email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <label htmlFor="password">Password</label>{" "}
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <button type="submit">SIGN IN</button>
        {errors.length > 0 && (
          <ul style={{ color: "red" }}>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
        
      </form>
    </div>
  );
}

export default LoginForm;