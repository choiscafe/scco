import { useState } from "react";
import { Link, useHistory } from "react-router-dom"

function Auth({ setCurrentUser }) {

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
          setErrors([])
          alert("Your account is now created!")
          history.push(`/users/${user.id}`)
         } else {
           r.json().then((errorData) => setErrors(Object.entries(errorData.errors).map(e => `${e[0]} ${e[1]}`)))
        }
      })
    }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>SCCO</h1>
        <h2>Create an account</h2>
        <h3>Already have an account?<Link to="/login">Login</Link></h3>
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
        <input type="submit" value="Sign up" />{" "}
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

export default Auth