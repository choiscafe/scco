import ProductCard from './ProductCard'

function ProductsContainer({ products, currentUser, updateReview }) {
  
  // console.log(currentUser)
    const productsList = products.map((product) => {

    return (
      <ProductCard
        key={product.id}
        product={product}
        currentUser={currentUser}
        updateReview={updateReview}
      />  
    )
  })

  return (
    <ul className="products-cards">{productsList}</ul>
  )
}

export default ProductsContainer