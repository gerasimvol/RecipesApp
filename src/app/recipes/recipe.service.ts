import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model'
import { Ingredient } from './../shared/ingredient.model';
import { ShoppingListService } from './../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService {
  recipes: Recipe[] = [
    new Recipe('Eggs',
               'English breakfast',
               'https://images.unsplash.com/photo-1465014925804-7b9ede58d0d7?auto=format&fit=crop&w=700&q=80',
               [
                 new Ingredient('Eggs', 1),
                 new Ingredient('Sousage', 2)
               ]
    ),
    new Recipe('Burger',
               'USA classics',
               'https://images.unsplash.com/photo-1508736793122-f516e3ba5569?auto=format&fit=crop&w=700&q=80',
               [
                 new Ingredient('Buns', 2),
                 new Ingredient('Meet', 1)
               ]
    )
  ]

  recipeSelected = new EventEmitter<Recipe>()

  constructor (private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice()
  }

  addIngredientsToShoppingList (ing: Ingredient[]) {
    this.shoppingListService.addToListMany(ing)
  }
}
