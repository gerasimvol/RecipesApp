import { Ingredient } from './../shared/ingredient.model'
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 2),
  ]

  startedEditing = new Subject<number>()

  getIngredients() {
    return this.ingredients
  }

  getIngredient(ingIndex: number) {
    return this.ingredients[ingIndex]
  }

  addToList (ingredient: Ingredient) {
    this.ingredients.push(ingredient)
  }

  addToListMany (ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients)
  }

  updateIngredient (ingIndex: number, newIngredient: Ingredient) {
    this.ingredients[ingIndex] = newIngredient
  }

  removeIngredient (ingIndex: number) {
    this.ingredients.splice(ingIndex, 1)
  }
}
