import ProductCard from './ProductCard'

function ProductsContainer({ products }) {
  

    const productsList = products.map((product) => {

    return (
      <ProductCard
        key={product.id}
        item={product}

      />  
    )
  })

  return (
    <ul className="arts-cards">{productsList}</ul>
  )
}

export default ProductsContainer