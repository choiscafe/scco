import { useState } from "react";
import { Link, useHistory } from "react-router-dom"

function Auth({ setCurrentUser }) {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([])
  
  const history = useHistory()

  function onSubmit(e) {
    e.preventDefault();
    const user = {
      username,
      email,
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
    <div className="signin-page">
      
        <h1 id="create-h1">Create an account</h1>
          <p id="already">
            Already have an account?&nbsp;
            <Link to="/login">Sign in</Link>
          </p>
          <form onSubmit={onSubmit}>
          <div className="signin-box">
            <label className="username" htmlFor="username">USERNAME</label>
            <input
              className="username-input"
              type="text"
              id="username"
              autoComplete="off"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />{" "}
            <label className="e-mail" htmlFor="email">E-MAIL</label>
            <input
              className="e-mail-input"
              type="text"
              id="email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />{" "}
            <label className="password-create" htmlFor="password">PASSWORD</label>
            <input
              className="password-create-input" 
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />{" "}
            <button type="submit">SIGN UP</button>
            {errors.length > 0 && (
              <ul style={{ color: "red" }}>
                {errors.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            )}
          </div>
      </form>
    </div>
  );
}

export default Auth