import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'
import { serviceRecipies } from '../recipe.service'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipies : Recipe[] = this.recipeService.getRecipies()

  constructor(private recipeService: serviceRecipies) { }

  ngOnInit() {
  }

}
