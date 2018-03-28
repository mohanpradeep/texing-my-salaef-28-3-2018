import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-detial',
  templateUrl: './recipe-detial.component.html',
  styleUrls: ['./recipe-detial.component.css']
})
export class RecipeDetialComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
