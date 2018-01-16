import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Ingredient } from './../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number
  editMode = false
  currentRecipe: Recipe
  recipeForm: FormGroup

  constructor(private route: ActivatedRoute,
              private router: Router,
              private recipeService: RecipeService
             ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id']
      this.editMode = params['id'] != null
      this.currentRecipe = this.recipeService.getRecipebyId(this.id)
      this.initForm()
    })
  }

  private initForm() {
    let recipeName = ''
    let recipeDescription = ''
    let recipeImagePath = ''
    // tslint:disable-next-line:prefer-const
    let recipeIngredients = new FormArray([])

    if (this.editMode) {
      recipeName = this.currentRecipe.name
      recipeDescription = this.currentRecipe.description
      recipeImagePath = this.currentRecipe.imagePath

      if (this.currentRecipe['ingredients']) {
        for (const ingredient of this.currentRecipe.ingredients) {
          recipeIngredients.push(new FormGroup({
            name: new FormControl(ingredient.name, Validators.required),
            amount: new FormControl(ingredient.amount, [ Validators.required, Validators.pattern(/^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/)])
          }))
        }
      }
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      imagePath: new FormControl(recipeImagePath, Validators.required),
      ingredients: recipeIngredients
    })
  }

  onSubmit() {
    const newRecipe = new Recipe(this.recipeForm.value['name'],
                                 this.recipeForm.value['description'],
                                 this.recipeForm.value['imagePath'],
                                 this.recipeForm.value['ingredients']
                      )
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, newRecipe)
    } else {
      this.recipeService.addRecipe(newRecipe)
    }

    this.onCancel()
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route})
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      name: new FormControl('', Validators.required),
      amount: new FormControl('', [ Validators.required, Validators.pattern(/^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/)])
    }))
  }

  onDeleteIngredient(ingIndex: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(ingIndex)
  }
}
