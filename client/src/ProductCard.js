import { useState } from "react";
import IngredientsContainer from './IngredientsContainer'
import ReviewsContainer from './ReviewsContainer'
import NewReviewForm from './NewReviewForm'
import BarChart from './components/BarChart'
import PopUp from './components/PopUp'
import 'reactjs-popup/dist/index.css';

function ProductCard({ product, currentUser, addReview }) {

  const [buttonPopup, setButtonPopup] = useState(false)
  const [buttonPopup2, setButtonPopup2] = useState(false)
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
        <div className="product">
          <img className="product-picture" src={image} alt={name} onClick={handleImage} />
          <p className="product-brand" onClick={handleImage}>{brand}</p>
          <p className="product-name" onClick={handleImage}>{name}</p>
          <p className="product-category"> {category}</p>
          <p className="product-rating">Avarage Review: {product.averageScore}</p>
          <p className="product-price">{price_size}</p>
        </div>
        :
        null
      }

      {displayImage ?
      null :
      <>
        <h2 onClick={handleImage}>Back to product</h2>
        <main>
          <h3>Ingredient</h3>
          <button onClick={() => setButtonPopup(true)}>At a glance</button>
        </main>
        <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
          <div><BarChart product={product} /></div>
        </PopUp >
        <button onClick={() => setButtonPopup2(true)}>see all ingredients</button>
        <PopUp className="popup2" trigger={buttonPopup2} setTrigger={setButtonPopup2}>
            <IngredientsContainer ingredients={ingredients} />
          </PopUp>
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

// <Popup trigger={<button> Trigger</button>} position="right center">
//     <div>Popup content here !!</div>
//   </Popup>