import IngredientsContainer from './IngredientsContainer'
import ReviewsContainer from './ReviewsContainer'
import NewReviewForm from './NewReviewForm'

function ProductCard({ product }) {

  const {id, name, category, brand, image, price_size, ingredients, reviews } = product

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
        <NewReviewForm />
        <ReviewsContainer reviews={reviews}/>
    </div>
  )
}
export default ProductCard