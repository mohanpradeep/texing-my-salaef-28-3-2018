import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

   @Output() recipeToOutput = new EventEmitter<Recipe>();

  recipe: Recipe [] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('Doughnut with', 'Doughnut with white And Pink Sprinkles', 'https://images.pexels.com/photos/867452/pexels-photo-867452.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'),
    // tslint:disable-next-line:max-line-length
    new Recipe('Berries Blackberries', 'Berries Blackberries Blueberries Cake', 'https://images.pexels.com/photos/236799/pexels-photo-236799.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'),
        // tslint:disable-next-line:max-line-length
    new Recipe('Appetizer Close', 'Appetizer Close Up Cuisine Delicious', 'https://images.pexels.com/photos/434258/pexels-photo-434258.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'),
        // tslint:disable-next-line:max-line-length
    new Recipe('Barbecue Blur', 'Barbecue Blur Chicken Citrus', 'https://images.pexels.com/photos/236799/pexels-photo-236799.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')
  ];
  constructor() { }

  ngOnInit() {
  }

  ursting(recipe: Recipe) {
    this.recipeToOutput.emit(recipe);
  }
}
