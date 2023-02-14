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
  const [buttonPopup3, setButtonPopup3] = useState(false)
  const [displayImage, setDisplayImage] = useState(true)
  const [showForm, setShowForm] = useState(false);

  const { id, name, category, brand, image, price_size, ingredients, reviews } = product

  function handleImage() {
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
          <div className="product">
            <h2 onClick={handleImage}>Back to product</h2>
            <main>
              <h3>Ingredient</h3>
              <button onClick={() => setButtonPopup(true)}>At a glance</button>
            </main>
            <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
              <div className="chart"><BarChart product={product} /></div>
            </PopUp >
            <button onClick={() => setButtonPopup2(true)}>see all ingredients</button>
            <PopUp trigger={buttonPopup2} setTrigger={setButtonPopup2}>
              <p>HAZARD SCORE RANGE Score legend</p>
              <img className="ewg-main" src="https://phorcys-static.ewg.org/skindeep_rails/scoring-header-3ec603e84ffa06b94f49a46aaaae5538a99f2194fda35aeea2730a9799a7438d.svg" alt="ewg_rating"></img>
              <IngredientsContainer ingredients={ingredients} />
            </PopUp>
            <h3>Rating & Reviews</h3>
            {showForm ? <NewReviewForm addReview={addReview} /> : null}
            {!showForm ?
              <p className="buttonContainer">
                <button onClick={handleClick}>Write a Review</button>
              </p>
              :
              null
            }
            <button onClick={() => setButtonPopup3(true)}>See all reviews</button>
            <PopUp trigger={buttonPopup3} setTrigger={setButtonPopup3}>
              <ReviewsContainer reviews={reviews} currentUser={currentUser} />
            </PopUp>
          </div>
        </>
      }
    </div>
  )
}
export default ProductCard
