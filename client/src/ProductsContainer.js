import ProductCard from './ProductCard'

function ProductsContainer({ products}) {
  

    const productsList = products.map((product) => {

    return (
      <ProductCard
        key={product.id}
        product={product}
        // ingredients={ingredients}
        // setIngredients={setIngredients}
      />  
    )
  })

  return (
    <ul className="arts-cards">{productsList}</ul>
  )
}

export default ProductsContainer