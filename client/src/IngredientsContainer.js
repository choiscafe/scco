import IngredientCard from './IngredientCard'
// import BarChart from "./components/BarChart";
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