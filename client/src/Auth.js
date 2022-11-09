import { useState } from "react";
import { useHistory } from "react-router-dom"
// import styled from "styled-components"
import Errors from './Errors'

function Auth({ setCurrentUser }) {
  console.log(setCurrentUser)
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState([]);
  const [errors, setErrors] = useState([])
  
  const history = useHistory()

  function onSubmit(e) {
    e.preventDefault();
    const user = {
      name,
      username,
      password
    }
    fetch("/users", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(user)
    }).then((r) => {
        if (r.ok) {
          r.json().then(setCurrentUser)
          history.push(`/user/${user.id}`)
         } else {
           r.json().then((errorData) => setErrors(errorData.errors))
        }
      })
    }
  
  if (errors) return <Errors errors={errors} />
  
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>SCCO</h1>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />{" "}
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />{" "}
        {errors.length > 0 && (
          <ul style={{ color: "red" }}>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
        <input type="submit" value="Sign up" />{" "}
        <input type="submit" value="Login" onClick={() => setLogin(true)} />
      </form>
    </div>
  );
}

export default Auth