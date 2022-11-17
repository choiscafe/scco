import DetailPage from './DetailPage'

function ProductCard({ product, currentUser, addReview }) {



  const {id, name, category, brand, image, price_size, ingredients, reviews } = product

 
  return (
    <div className="product-card">
      
      <img src={image} alt={name} />
      <p>{brand}</p>
      <h4>{name}</h4>
      <p>{category}</p>
      <p>Avarage Review: {product.averageScore}</p>
      <p>{price_size}</p>
      <h2>Ingredient: </h2>
      <DetailPage currentUser={currentUser} addReview={addReview} product={product}/>
      
    </div>
  )
}
export default ProductCard