import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from './../../shared/ingredient.model';
import { ShoppingListService } from '.././shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('form') form: NgForm
  subscriptionForEdit: Subscription
  editMode = false
  editedItemIndex: number
  editedItem: Ingredient

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscriptionForEdit = this.shoppingListService.startedEditing.subscribe(
      (ingIndex: number) => {
        this.editedItemIndex = ingIndex
        this.editMode = true
        this.editedItem = this.shoppingListService.getIngredient(ingIndex)
        this.form.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    )
  }

  onSubmit(form: NgForm) {
    const value = form.value
    const newIng = new Ingredient(value.name, value.amount)
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIng)
    } else {
      this.shoppingListService.addToList(newIng)
    }
    this.clear()
  }

  onRemoveIngredient() {
    this.shoppingListService.removeIngredient(this.editedItemIndex)
    this.clear()
  }

  clear() {
    this.form.reset()
    this.editMode = false
  }

  ngOnDestroy() {
    this.subscriptionForEdit.unsubscribe()
  }
}
