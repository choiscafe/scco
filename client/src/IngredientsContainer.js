import IngredientCard from './IngredientCard'

function IngredientsContainer({ ingredients }){
  
  const ingredientlist = ingredients.map((ingredient) => {
    
    return (
      <IngredientCard
        key={ingredient.id}
        ingredient={ingredient}
      />
    )     
  })
  return (
    <ul className="ingredients-cards">{ingredientlist}</ul>
  )
}
export default IngredientsContainer