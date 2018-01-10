import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Eggs', 'English breakfast', 'https://images.unsplash.com/photo-1465014925804-7b9ede58d0d7?auto=format&fit=crop&w=700&q=80'),
    new Recipe('Burger', 'USA classics', 'https://images.unsplash.com/photo-1508736793122-f516e3ba5569?auto=format&fit=crop&w=700&q=80')
  ]

  @Output() recipeWasSelected = new EventEmitter<Recipe>()

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }
}
