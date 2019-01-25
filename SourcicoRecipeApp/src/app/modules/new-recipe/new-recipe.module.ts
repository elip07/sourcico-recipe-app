import { CoreModule } from './../../core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { NewRecipeComponent } from './pages/new-recipe/new-recipe.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { NewRecipesRoutingModule } from './newRecipes-routing.module';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [NewRecipeComponent, RecipeComponent],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    NewRecipesRoutingModule,
    MatSelectModule
  ],
  exports: [
    NewRecipeComponent,
    RecipeComponent
  ]
})
export class NewRecipeModule { }
