import ProductCard from './ProductCard'


function ProductsContainer({ products, currentUser, addReview }) {
  
    const productsList = products.map((product) => {

    return (
      <ProductCard
        key={product.id}
        product={product}
        currentUser={currentUser}
        addReview={addReview}
      />  
    )
  })

  return (
    <ul className="products-cards">{productsList}</ul>
  )
}

export default ProductsContainer