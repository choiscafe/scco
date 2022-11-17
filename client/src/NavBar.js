import { NavLink, useHistory } from 'react-router-dom'
import "./App.css";

function NavBar({ updateUser, currentUser }){

  const history = useHistory()

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        updateUser(false); 
        alert("See you again (ʘ‿ʘ)ノ✿")
        history.push(`/`)
      }
    })
  }

  return(
    <div className="App-header">
      <li className="Menu">
        <NavLink activeClassName='active' to="products">Skincare</NavLink>{" "}
        <NavLink activeClassName='active' to="/">Cleansing</NavLink>{" "}
        <NavLink activeClassName='active' to="/">Mask</NavLink>{" "}
        <NavLink activeClassName='active' to="/">Suncare</NavLink>{" "}
        <NavLink activeClassName='active' to="/">Base Makeup</NavLink>{" "}
        <NavLink activeClassName='active' to="/">Eye Makeup</NavLink>{" "}
        <NavLink activeClassName='active' to="/">Lip Makeup</NavLink>{" "}
        <NavLink activeClassName='active' to="/">Body</NavLink>{" "}
        <NavLink activeClassName='active' to="/">Hair</NavLink>{" "}
        <NavLink activeClassName='active' to="/">Nail</NavLink>{" "}
        <NavLink activeClassName='active' to="/">Perfume</NavLink>{" "}
        
        {!currentUser? (
            <>
      
            </>
        ) : (
          <>
            <NavLink activeClassName='activereview' to="/myreviews">My Reviews</NavLink>{" "}
            {/* <p>Welcome, {currentUser.username}!</p> */}
            <button className="signout" onClick={handleLogoutClick}>Sign out</button>
          </>
        )}
      </li>
    </div>
  )
}

export default NavBar

