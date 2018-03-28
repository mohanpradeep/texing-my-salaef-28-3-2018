import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.module';
import { RecipeSService } from '../../recipe-s.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeservice: RecipeSService) { }

  ngOnInit() {
  }
  demo() {
    this.recipeservice.recipeSelected.emit(this.recipe);
  }
}
