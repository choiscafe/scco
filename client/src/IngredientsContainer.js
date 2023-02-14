import IngredientCard from './IngredientCard'

function IngredientsContainer({ ingredients }) {

  const ingredientlist = ingredients.map((ingredient) => {

    return (
      <div>

        <IngredientCard
          key={ingredient.id}
          ingredient={ingredient}
        />
      </div>
    )
  })
  return (
    <ul className="ingredients-cards">{ingredientlist}</ul>
  )
}
export default IngredientsContainer