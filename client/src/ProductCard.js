import { useState } from "react";
import IngredientsContainer from './IngredientsContainer'
import ReviewsContainer from './ReviewsContainer'
import NewReviewForm from './NewReviewForm'
import BarChart from './components/BarChart'

function ProductCard({ product, currentUser, addReview }) {

  const [displayImage, setDisplayImage] = useState(true)
  const [showForm, setShowForm] = useState(false);

  const {id, name, category, brand, image, price_size, ingredients, reviews } = product
  
  function handleImage(){
    setDisplayImage(!displayImage)
  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
 
  return (
    <div className="product-card">
      {displayImage ?
        <>
          <img src={image} alt={name} onClick={handleImage} />
          <p onClick={handleImage}>{brand}</p>
          <p onClick={handleImage}>{name}</p>
          <p>{category}</p>
          <p>Avarage Review: {product.averageScore}</p>
          <p>{price_size}</p>
        </>
        :
        null
      }

      {displayImage ?
      null :
      <>
        <h2 onClick={handleImage}>Ingredient: </h2>
        <BarChart product={product} onClick={handleImage}/>
        <IngredientsContainer ingredients={ingredients} />
        <h2>Rating & Reviews</h2>
          {showForm ? <NewReviewForm addReview={addReview}/> : null}
          {!showForm ? 
            <p className="buttonContainer">
              <button onClick={handleClick}>Write a Review</button>
            </p> 
            : 
            null 
          }
        <ReviewsContainer reviews={reviews} currentUser={currentUser}/>
      </>
    }
    </div>
  )
}
export default ProductCard