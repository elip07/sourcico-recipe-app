import { HttpModule } from '@angular/http';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './shared/layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { RecipesModule } from './modules/recipes/recipes.module';
import { RecipeService } from './core/services/recipe.service';
import { NewRecipeModule } from './modules/new-recipe/new-recipe.module';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    LayoutModule,
    RouterModule,
    AppRoutingModule,
    RecipesModule,
    NewRecipeModule,
    MatSelectModule,
    HttpModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
