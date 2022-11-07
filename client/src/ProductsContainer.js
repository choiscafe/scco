import ProductCard from './ProductCard'

function ProductsContainer({ products, currentUser, updateReview }) {
  

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
    <ul className="arts-cards">{productsList}</ul>
  )
}

export default ProductsContainer