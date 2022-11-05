import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Counter } from './features/counter/Counter'
import Login from './Login'
import Auth from './Auth'
import NavBar from './NavBar';
import ProductsContainer from './ProductsContainer'

function App() {

  const [currentUser, setCurrentUser] = useState('')
  const [errors, setErrors] = useState(false)
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("/me")
    .then(r => {
      if (r.ok) {
        r.json().then(user => {
          updateUser(user)
        });
      }
    });
  }, [])
  
  const updateUser = (user) => setCurrentUser(user)

  useEffect(() => {
    fetch("/products")
      .then(r => {
        if(r.ok){
          r.json().then(productslist => {
            showProducts(productslist)
          })
        }
      })
  }, [])

  const showProducts = (productslist) => setProducts(productslist)


  return (
    <BrowserRouter>
      <div className="App">
        <Counter />
        <NavBar updateUser={updateUser} currentUser={currentUser}/>
        {!currentUser ? 
          <Switch>
            <Route exact path="/login">
              <Login updateUser={updateUser} />
            </Route> 
            <Route exact path="/signup">
              <Auth setCurrentUser={setCurrentUser} />
            </Route>
            <Route exact path="/">
                <h1>Hello, Welcome to SCCO</h1>
                <h2>Know your skin food</h2>
              </Route>
          </Switch> :
          <Switch>
            <Route exact path="/">
              <h1>Welcome to SCCO</h1>
              <h2>Welcome, {currentUser.username}!</h2>
            </Route>
            <Route path="/products">
              <h1>Products</h1>
              <ProductsContainer
                products={products}
              />
            </Route>
          </Switch>
        }
      </div>
    </BrowserRouter>
  );
}

export default App;