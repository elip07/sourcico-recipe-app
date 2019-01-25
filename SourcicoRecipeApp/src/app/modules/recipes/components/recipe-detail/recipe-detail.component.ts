import { RecipeService } from './../../../../core/services/recipe.service';
import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../../../core/models/recipe.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  id: number;
  myRecipe: any;
  deletedRecipe: Recipe;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getRecipes(this.id);
  }

  getRecipes(id: number) {
    const url = 'recipes/' + id;
    this.myRecipe = this.recipeService.get(url).subscribe(data => {
      this.myRecipe = data;
      console.log(this.myRecipe);
    });
  }

  onDeleteRecipe(index: number) {
    if (confirm('Are you sure to delete ')) {
    const url = 'recipes/' + index;
    this.recipeService.delete(url)
      .subscribe(data => this.deletedRecipe = data);
    this.router.navigateByUrl('/recipes');
    }
  }

  onRecipeList() {
    this.router.navigateByUrl('/recipes');
  }
}
