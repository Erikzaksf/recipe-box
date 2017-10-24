import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Recipe Box</h1>
    <h3>A place to store your recipes</h3>
    <h4>{{currentRecipe}}</h4>
    <h2>This is where we will put our buttons</h2>
  </div>
  `
})

export class AppComponent {
  currentRecipe: string = 'Tacos al pastor';
}
