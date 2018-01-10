import { Component, OnInit } from '@angular/core';
import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('RecipeName', 'Description', 'https://images.unsplash.com/photo-1465014925804-7b9ede58d0d7?auto=format&fit=crop&w=711&q=80')
  ]

  constructor() { }

  ngOnInit() {
  }

}
