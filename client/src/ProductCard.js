// import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'

function ProductCard({ item }) {

  // const [errors, setErrors] = useState()

  // const history = useHistory()

  const {id, name, category, brand, image, price_size} = item

  // if(errors) return <h1>{errors}</h1>
  

  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>{category}</p>
      <p>{brand}</p>
      <p>{price_size}</p>

    </div>
  )
}
export default ProductCard