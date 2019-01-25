import { BrowserModule } from '@angular/platform-browser';
import { RecipeService } from './services/recipe.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule
  ],
  providers: [ RecipeService ],
  declarations: []
})
export class CoreModule { }
