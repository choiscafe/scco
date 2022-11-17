function IngredientCard({ ingredient }){
  
  const {id, name, ewg_rating, toxic, irritant, skin_type, functional} = ingredient
  
  return (
    <div className="ingredient-card">
    <p>{name}</p>
      <p>{ewg_rating}</p> 
      <p>{toxic}</p>
      <p>{irritant}</p>
      <p>{skin_type}</p>
      <p>{functional}</p> 
    </div>
  )
}
export default IngredientCard