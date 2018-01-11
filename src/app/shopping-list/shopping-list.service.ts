import { Ingredient } from './../shared/ingredient.model'

export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 2),
  ]

  getIngredients() {
    return this.ingredients
  }

  addToList (ingredient: Ingredient) {
    this.ingredients.push(ingredient)
  }

  addToListMany (ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients)
  }
}
