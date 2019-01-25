import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewRecipeComponent } from './modules/new-recipe/pages/new-recipe/new-recipe.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'newrecipe', component: NewRecipeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
