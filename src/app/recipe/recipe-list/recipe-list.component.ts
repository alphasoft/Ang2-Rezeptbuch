import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from "../recipe.model";
import { Ingredient } from "../../shared/ingredient.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Schnitzel',
      'Sehr lecker',
      'http://kmetro.restaurantden.com/wp-content/uploads/sites/67/2016/03/dish_1.jpg',
      [
        new Ingredient('Pommes', 10),
        new Ingredient('Schnitzel', 1),
      ]
    ),
    new Recipe('Salat', 'Auch lecker?', 'http://www.about.ch/culture/food/salat.jpg', []),
  ];
  selectedRecipe: Recipe;

  constructor() {
  }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
