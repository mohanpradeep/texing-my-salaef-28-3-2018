import { Component, OnInit } from '@angular/core';
import { RecipeSService } from './recipe-s.service';
import { Recipe } from './recipe.module';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']

})
export class RecipeComponent implements OnInit {
  recipList: Recipe;
  constructor(private recipeservice: RecipeSService) { }

  ngOnInit() {
    this.recipeservice.recipeSelected
    .subscribe(
      (recipe: Recipe) => {
        this.recipList = recipe;
      }
    );
  }
}
