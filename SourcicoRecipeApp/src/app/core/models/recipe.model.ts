import { Ingredient } from './ingredient.model';

export class Recipe {
  public id: number;
  public name: string;
  public source: string;
  public ingredients: Ingredient[];
  public preparationTime: string;
  public instructions: string;

  constructor(id: number, name: string, source: string, ingredients: Ingredient[], preparationTime: string, instructions: string) {
    this.id = id;
    this.name = name;
    this.source = source;
    this.ingredients = ingredients;
    this.preparationTime = preparationTime;
    this.instructions = instructions;
  }
}
