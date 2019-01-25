import { NgModule } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    RecipesRoutingModule,
    MatSelectModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule
  ],
  declarations: [RecipeListComponent, RecipeDetailComponent],
  exports: [
    RecipeListComponent,
    RecipeDetailComponent
  ]
})
export class RecipesModule { }
