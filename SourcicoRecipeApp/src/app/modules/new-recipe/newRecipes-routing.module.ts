import { NewRecipeComponent } from './pages/new-recipe/new-recipe.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'newrecipe',
        component: NewRecipeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class NewRecipesRoutingModule {}
