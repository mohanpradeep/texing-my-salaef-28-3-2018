import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.module';
import { RecipeSService } from '../recipe-s.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
   recipe: Recipe [];

  constructor(private recipeservice: RecipeSService) {}

  ngOnInit() {
    this.recipe = this.recipeservice.getRecipes();
  }

}
