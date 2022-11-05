import IngredientsContainer from './IngredientsContainer'

function ProductCard({ product }) {

  const {id, name, category, brand, image, price_size, ingredients } = product

  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>{category}</p>
      <p>{brand}</p>
      <p>{price_size}</p>
      <p>Ingredients: </p>
      <IngredientsContainer ingredients={ingredients} />
    </div>
  )
}
export default ProductCard