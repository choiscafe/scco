import { NavLink } from 'react-router-dom'

function NavBar({ updateUser, currentUser }){

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        updateUser(null); 
      }
    })
  }

  return(
    <div className="App-header">
      <NavLink to="/products">Products</NavLink>{" "}
      <NavLink to="/">Skincare</NavLink>{" "}
      <NavLink to="/">Cleansing/Peeling</NavLink>{" "}
      <NavLink to="/">Mask</NavLink>{" "}
      <NavLink to="/">Suncare</NavLink>{" "}
      <NavLink to="/">Base Makeup</NavLink>{" "}
      <NavLink to="/">Eye Makeup</NavLink>{" "}
      <NavLink to="/">Lip Makeup</NavLink>{" "}
      <NavLink to="/">Body</NavLink>{" "}
      <NavLink to="/">Hair</NavLink>{" "}
      <NavLink to="/">Nail</NavLink>{" "}
      <NavLink to="/">Perfume</NavLink>{" "}
      <NavLink to="/myreviews">My Reviews</NavLink>{" "}
      {currentUser? (
        <header>
          <p>Welcome, {currentUser.username}!</p>
          <button onClick={handleLogoutClick}>Logout</button>
        </header>
      ) : (
        <>
          <NavLink to="/signup">Signup</NavLink>{" "}
          <NavLink to="/login">Login</NavLink>
        </>
      )}
    </div>
  )
}

export default NavBar