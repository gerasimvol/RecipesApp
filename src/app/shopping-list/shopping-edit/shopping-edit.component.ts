import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from './../../shared/ingredient.model';
import { ShoppingListService } from '.././shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef
  @ViewChild('amountInput') amountInputRef: ElementRef

  a: string
  b: number

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  addIngredient() {
    const ingName = this.nameInputRef.nativeElement.value
    const ingAmount = this.amountInputRef.nativeElement.value
    if (!ingName || !ingAmount) {
      return
    }
    const newIng = new Ingredient(ingName, ingAmount)
    this.shoppingListService.addToList(newIng)
    this.clear()
  }

  clear() {
    this.nameInputRef.nativeElement.value = null
    this.amountInputRef.nativeElement.value = null
  }
}
