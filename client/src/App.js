// import { Counter } from './features/counter/Counter'
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, NavLink, Link } from "react-router-dom";
import Login from './Login'
import Auth from './Auth'
import NavBar from './NavBar';
import ProductsContainer from './ProductsContainer'
import EditReviewForm from './EditReviewForm'
import MyReviewsContainer from './MyReviewsContainer'
import Search from "./Search";
import Storefront from "./Storefront"
// import DetailPage from './DetailPage'

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

  const scoresArray = products.map((a)=> a.reviews.map((b)=> b.score))
  const averageScores= scoresArray.map((a)=>reviewAverage(a))
  for(let i= 0; i<averageScores.length; i++){
    // Push avarage score inside products array
    products[i].averageScore = averageScores[i]
  }
 
  function reviewAverage(array){
    let total = 0;
    for(let i = 0; i < array.length; i++) {
      total += parseInt(array[i]);
    }
    return total = total/array.length
  }
  
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
          <Link to={`/`}><img src="SCCO.png" className="logo" alt="logo" /></Link>
          <Search search={filterSearch}/>
          {!currentUser ? 
            <div>
              <img src="login.png" className="login" alt="login"/>
              <NavLink className='signin' to="/login">Sign in</NavLink>
            </div>
          : <h2 className="welcome">Welcome, {currentUser.username}!</h2>
          }
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
              <ProductsContainer products={displayProducts} currentUser={currentUser} />
            </Route>
          </Switch> :
          <Switch>
            <Route exact path="/">
              <Storefront />
            </Route>
            <Route exact path="/products">
              <ProductsContainer addReview={addReview} products={displayProducts} currentUser={currentUser}/>
            </Route>
            <Route exact path="/myreviews">
              <h1 className="myreviews">My Reviews</h1>
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