import { useState } from "react";
import { Link } from "react-router-dom"
import LoginForm from "./LoginForm";


function Login({ updateUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      {showLogin ? (
        <>
          <LoginForm updateUser={updateUser} />
          <p>
            Don't have an account? &nbsp;
            <button color="secondary" onClick={() => setShowLogin(false)}>
            <Link to="/signup">Sign Up</Link>
            </button>
          </p>
        </>
      ) : (
        <>
          <p>
            Already have an account? &nbsp;
            <button color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </>
      )}
    </div>
  );
}

export default Login;