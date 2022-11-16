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
          <p className="create-one">
            Need an account? &nbsp;
            <Link to="/signup">Create one</Link>
          </p>
        </>
      ) : (
        <>
          <p className="create-one">
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