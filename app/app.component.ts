import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Recipe Box</h1>
    <h3>A place to store your recipes</h3>
    <h4>{{currentRecipe}}</h4>
    <ul>
      <li *ngFor="let currentRecipe of recipes">
        Name:{{currentRecipe.name}} <br>
        Ingredients:   {{currentRecipe.ingredients}} <br>
        instructions: {{ currentRecipe.instructions}}  <br>
        <button (click)="editRecipe()">Edit!</button>
      </li>

    </ul>
  </div>
  `
})

export class AppComponent {
  currentRecipe: string = 'Meatloaf';
  recipes: Recipe[] = [
    new Recipe('Meatloaf', '1lb gnd.beef, 1 onion', 'coook that stufffff'),
    new Recipe('Ablskiver', ';laskd;lkdfsl;k', 'sldsfl'),
    new Recipe('Bim Bap', 'words', 'wprdss')
  ];
  editRecipe() {
    alert("Please make your edit.")
  }
}

export class Recipe {
  constructor(public name: string, public ingredients: string, public instructions: string) {  }
}
