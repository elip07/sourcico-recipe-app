import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'recipes',
        component: RecipeListComponent
      },
      {
        path: 'recipedetail/:id',
        component: RecipeDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RecipesRoutingModule {}
