import { NavLink, useHistory } from 'react-router-dom'

function NavBar({ updateUser, currentUser }){

  const history = useHistory()

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        updateUser(false); 
        history.push(`/`)
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
      
      {!currentUser? (
          <>
            <NavLink to="/signup">Signup</NavLink>{" "}
            <NavLink to="/login">Login</NavLink>
          </>
      ) : (
        <>
          <NavLink to="/myreviews">My Reviews</NavLink>{" "}
          <p>Welcome, {currentUser.username}!</p>
          <button onClick={handleLogoutClick}>Sign out</button>
        </>
      )}
    </div>
  )
}

export default NavBar