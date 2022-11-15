// import { Counter } from './features/counter/Counter'
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './Login'
import Auth from './Auth'
import NavBar from './NavBar';
import ProductsContainer from './ProductsContainer'
import EditReviewForm from './EditReviewForm'
import MyReviewsContainer from './MyReviewsContainer'
import Search from "./Search";
import Storefront from "./Storefront"

function App() {

  const [currentUser, setCurrentUser] = useState(false)
  const [products, setProducts] = useState([])
  const [reviews, setReviews] = useState({});
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch('/reviews')
    .then(res => res.json())
    .then(reviews => setReviews(reviews))
  }, [])

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
  const updateUser = (user) => setCurrentUser(user)
  useEffect(() => {
    fetch("/me")
    .then(r => {
      if (r.ok) {
        r.json().then((user) => updateUser(user));
      }
    });
  }, [])
  
  const addReview = (review) => setReviews(current => [...current, review])

  const updateReview = (updatedReview) => setReviews(current => {
    return current.map(review => {
      if(review.id === updatedReview.id){
        return updatedReview
       } else {
         return review
       } 
      })
    })

  const handleDeleteReview = (id) => setReviews(current => current.filter(r => r.id === id))
  
  function filterSearch(text) {
    setSearch(text)
  }

  const displayProducts = products.filter(product => {
        const searchLowerCase = search.toLocaleLowerCase()
        return (
            product.name.toLowerCase().includes(searchLowerCase)||
            product.category.toLowerCase().includes(searchLowerCase)||
            product.brand.toLowerCase().includes(searchLowerCase)
        )
  })

  return (
    <BrowserRouter>
    {/* <UseContext.Provider> */}
      <div className="App">
        {/* <Counter /> */}
        <div className="Topbar">
          <img src="SCCO.png" className="logo" alt="logo"/>
          <Search search={filterSearch}/>
        </div>
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
              <Storefront />
            </Route>
            <Route exact path="/products">
              <h1>Products</h1>
              <ProductsContainer products={displayProducts} currentUser={currentUser} />
            </Route>
          </Switch> :
          <Switch>
            <Route exact path="/">
              <h1>Welcome to SCCO</h1>
              <h2>Welcome, {currentUser.username}!</h2>
              <h3>Clean & soft Skincare</h3>
            </Route>
            <Route exact path="/products">
              <h1>Products</h1>
              <ProductsContainer addReview={addReview} products={products} currentUser={currentUser}/>
            </Route>
            <Route exact path="/myreviews">
              <h1>My Reviews</h1>
              <MyReviewsContainer reviews={reviews} currentUser={currentUser} handleDeleteReview={handleDeleteReview}/>
            </Route>
            <Route exact path="/myreviews/:id/edit">
              <EditReviewForm updateReview={updateReview} reviews={reviews} setReviews={setReviews} currentUser={currentUser}/>
            </Route>
          </Switch>
        }
      </div>
      {/* </UseContext.Provider> */}
    </BrowserRouter>
  );
}

export default App;