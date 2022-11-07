import IngredientsContainer from './IngredientsContainer'
import ReviewsContainer from './ReviewsContainer'
import NewReviewForm from './NewReviewForm'
import { useState } from "react";

function ProductCard({ product, currentUser, updateReview }) {

  const [showForm, setShowForm] = useState(false);

  const {id, name, category, brand, image, price_size, ingredients, reviews } = product

  

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>{category}</p>
      <p>{brand}</p>
      <p>{price_size}</p>
      <h2>Ingredients: </h2>
        <IngredientsContainer ingredients={ingredients} />
      <h2>Reviews: </h2>
      {!currentUser}
        {showForm ? <NewReviewForm updateReview={updateReview}/> : null}
        {!showForm ? <div className="buttonContainer">
          <button onClick={handleClick}>Add a Review</button>
        </div> : null}
        <ReviewsContainer reviews={reviews}/>
    </div>
  )
}
export default ProductCard