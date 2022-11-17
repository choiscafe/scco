// import { useState } from "react";
import IngredientsContainer from './IngredientsContainer'
import ReviewsContainer from './ReviewsContainer'
import NewReviewForm from './NewReviewForm'
import BarChart from './components/BarChart'
import { useState, useEffect } from "react";
function DetailPage({product, currentUser, addReview}){

  const {id, name, category, brand, image, price_size, ingredients, reviews } = product
  const [showForm, setShowForm] = useState(false);
  // // const [showDetail, setShowDetail] = useState({})
  // useEffect(() => {
  //   fetch(`/products/${id}`)
  //   .then(res => res.json())
  //   .then(showDetail => setShowDetail(showDetail))
  // }, [id])
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <p>{brand}</p>
      <h4>{name}</h4>
      <p>{category}</p>
      <p>Avarage Review: {product.averageScore}</p>
      <p>{price_size}</p>
      <h2>Ingredient: </h2>
      <>
        <BarChart product={product}/>
        <IngredientsContainer ingredients={ingredients} />
      </>
      <h2>Rating & Reviews</h2>
        {showForm ? <NewReviewForm addReview={addReview}/> : null}
        {!showForm ? <div className="buttonContainer">
          <button onClick={handleClick}>Write a Review</button>
        </div> : null}
        <ReviewsContainer reviews={reviews} currentUser={currentUser}/>
    </div>
  )
}
export default DetailPage