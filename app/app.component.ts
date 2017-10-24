import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Recipe Box</h1>
    <h3>"A recipe has no soul. You, as the cook, must bring soul to the recipe." -Thomas Keller</h3>
    <h4>{{currentRecipe}}</h4>
    <ul>
      <li [class]="typeColor(currentRecipe)" (click)="iMade(currentRecipe)" *ngFor="let currentRecipe of recipes" class = "list">
        <div class ="name">{{currentRecipe.name}} </div><br>
        Ingredients:   {{currentRecipe.ingredients}} <br>
        Instructions: {{ currentRecipe.instructions}}  <br>
        <button (click)="editRecipe()">Edit!</button>
      </li>
    </ul>
  </div>
  `
})

export class AppComponent {
  // currentRecipe: string = 'Meatloaf';
  recipes: Recipe[] = [
    new Recipe('Meatloaf', '1.5 lb gnd.beef, 1 onion, 1 cup milk, 1 cup dried bread crumbs', '1) Preheat oven to 350 degrees, 2) Combine beef, egg, onion, milk and crumbs, season with salt and pepper and place in lightly greased 5x9 koaf pan, 3) In a seperate bowl combine browns ugar, mustard, and ketchup. Mix well and pour over meatloaf, 4) Bake at 350 degrees F for 1 hour', 2),
    new Recipe('Ablskiver', ';laskd;lkdfsl;k', 'sldsfl', 2),
    new Recipe('Bim Bap', 'words', 'wprdss', 1)
  ];

  editRecipe() {
    alert("Please make your edit.")
  }

  iMade(clickedRecipe: Recipe) {
    if(clickedRecipe.made === true) {
      alert("You've made this!");
    } else {
      alert("This recipe is not going to make itself!");
    }
  }
  typeColor(currentRecipe){
    if (currentRecipe.type === 2){
      return "bg-danger";
    }else if (currentRecipe.type === 3){
      return "bg-warning";
    }else {
      return "bg-info";
    }
  }
}

export class Recipe {
  public made: boolean = false;
  constructor(public name: string, public ingredients: string, public instructions: string, public type: number) {  }
}
