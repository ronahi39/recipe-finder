import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-recipe-search',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './recipe-search.component.html',
  styleUrl: './recipe-search.component.scss'
})
export class RecipeSearchComponent {

  searchQuery: string = ''; // Suchbegriff

  searchRecipes() {
    console.log('Suche nach:', this.searchQuery);
    // TODO: API-Aufruf oder Filter-Logik hinzufügen
  }

}
