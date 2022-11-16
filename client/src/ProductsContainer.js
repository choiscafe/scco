import ProductCard from './ProductCard'


function ProductsContainer({ products, currentUser, addReview  }) {
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
    <div>
      <h2 className='skincare'>Skincare</h2>
      <div className="products-cards">{productsList}</div>
    </div>
    )
}

export default ProductsContainer