import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Ingredient } from './../../../../core/models/ingredient.model';
import { Recipe } from '../../../../core/models/recipe.model';
import { RecipeService } from './../../../../core/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  ingredients: Ingredient[];
  selectedRecipe: Recipe;
  deletedRecipe: Recipe;
  displayedColumns: string[] = ['id', 'name', 'source', 'ingNumber', 'ingredients', 'instructions', 'preparationTime', 'display', 'delete'];
  dataSource = this.recipes;

  constructor(public recipeService: RecipeService,
              public http: Http,
              public router: Router) { }

  ngOnInit() {
    this.getRecipes();
    this.getIngredients();
  }

  getIngredients() {
    this.recipeService.get('ingredients')
      .subscribe(data => this.ingredients = data);
  }

  getRecipes() {
    this.recipeService.get('recipes')
      .subscribe(data => this.recipes = data);
  }

  onDeleteRecipe(index: number) {
    if (confirm('Are you sure to delete ')) {
    const url = 'recipes/' + index;
    this.recipeService.delete(url)
      .subscribe(data => this.deletedRecipe = data);
    this.getRecipes();
    }
  }
}
