import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Recipe } from 'src/app/core/models/recipe.model';
import { Ingredient } from '../../../../core/models/ingredient.model';
import { RecipeService } from 'src/app/core/services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  id: number;
  recipeForm: FormGroup;
  newRecipe: Recipe;
  ingredients: Ingredient[];
  totalCount: any;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router) { }

  ngOnInit() {
    this.getRecipesCount();
    this.route.params
     .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        console.log(this.id);
        this.initForm();
      }
    );
  }

  private initForm() {
    const id = '';
    const recipeName = '';
    const recipeSource = '';
    const recipePrepTime = '';
    const recipeInstructions = '';
    const recipeIngredients = new FormArray([], Validators.required);

    this.recipeForm = new FormGroup({
      'id': new FormControl(id),
      'name': new FormControl(recipeName, Validators.required),
      'source': new FormControl(recipeSource),
      'preparationTime': new FormControl(recipePrepTime, Validators.required),
      'instructions': new FormControl(recipeInstructions, Validators.required),
      'ingredients': recipeIngredients
    });
    this.getIngredients();
  }

  getRecipesCount() {
    this.recipeService.get('recipes')
      .subscribe(data => {
        console.log(data.length);
        this.totalCount = data.length;
      });
  }

  getIngredients() {
    this.recipeService.get('ingredients')
      .subscribe(data => this.ingredients = data);
  }

  onSubmit() {
    this.getRecipesCount();
    this.recipeForm.patchValue({
      id: (this.totalCount + 1).toString()
    });
    let recipe = JSON.stringify(this.recipeForm.value);
    this.recipeService.post('recipes', recipe)
        .subscribe(data => recipe = data);
    this.onCancel();
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null),
        'quantity': new FormControl(null, [ Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
