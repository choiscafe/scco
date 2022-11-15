import { useState } from "react";
import IngredientsContainer from './IngredientsContainer'
import ReviewsContainer from './ReviewsContainer'
import NewReviewForm from './NewReviewForm'
import BarChart from './components/BarChart'

function ProductCard({ product, currentUser, addReview }) {

  const [showForm, setShowForm] = useState(false);

  const {id, name, category, brand, image, price_size, ingredients, reviews } = product

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
 
  return (
    <div className="product-card">
      <p>Avarage Review: {product.averageScore}</p>
      <img src={image} alt={name} />
      <p>{brand}</p>
      <h4>{name}</h4>
      <p>{category}</p>
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
export default ProductCard