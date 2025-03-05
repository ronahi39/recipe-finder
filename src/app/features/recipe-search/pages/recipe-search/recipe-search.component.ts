import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-recipe-search',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatSliderModule,
    MatFormField,
    MatInputModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatCardModule,
    MatIconModule,
    MatButton,
  ],
  templateUrl: './recipe-search.component.html',
  styleUrl: './recipe-search.component.scss',
})
export class RecipeSearchComponent {
  constructor() {
    // Alle Karten standardmäßig zugeklappt
    this.ingredientCategories.forEach((category) => {
      this.collapsedStates[category.name] = true;
    });
  }

  searchQuery: string = ''; // Suchbegriff

  minValueCal: number = 0;
  maxValueCal: number = 2500;

  minValueCarb: number = 0;
  maxValueCarb: number = 400;

  minValueProtein: number = 0;
  maxValueProtein: number = 200;

  minValueFat: number = 0;
  maxValueFat: number = 200;

  collapsedStates: { [key: string]: boolean } = {};

  ingredientCategories = [
    {
      name: 'Gemüse',
      items: [
        'Paprika',
        'Champignons',
        'Aubergine',
        'Karotten',
        'Tomaten',
        'Gurken',
        'Brokkoli',
        'Blumenkohl',
        'Zucchini',
        'Spinat',
        'Grünkohl',
        'Rettich',
        'Rucola',
        'Sellerie',
        'Spargel',
        'Pak Choi',
        'Chinakohl',
        'Mungbohnensprossen',
        'Wasserkastanien',
        'Lotuswurzel',
        'Shiitake-Pilze',
        'Enoki-Pilze',
        'Okraschoten',
      ],
    },
    {
      name: 'Proteinquellen',
      items: [
        'Hähnchen',
        'Rindfleisch',
        'Tofu',
        'Lachs',
        'Garnelen',
        'Edamame',
        'Seitan',
        'Eier',
      ],
    },
    {
      name: 'Öle & Fette',
      items: [
        'Olivenöl',
        'Kokosöl',
        'Sesamöl',
        'Erdnussöl',
        'Butter',
        'Avocado',
        'Mandeln',
      ],
    },
    {
      name: 'Obst',
      items: [
        'Apfel',
        'Banane',
        'Erdbeeren',
        'Orangen',
        'Mango',
        'Ananas',
        'Litschi',
        'Granatapfel',
      ],
    },
    {
      name: 'Weitere Zutaten',
      items: [
        'Reis',
        'Nudeln',
        'Udon-Nudeln',
        'Soba-Nudeln',
        'Reisnudeln',
        'Glasnudeln',
        'Quinoa',
        'Milch',
        'Kokosmilch',
        'Sojasauce',
        'Miso-Paste',
        'Mirin',
        'Teriyaki-Sauce',
        'Käse',
      ],
    },
  ];

  searchRecipes() {
    console.log('Suche nach:', this.searchQuery);
    // TODO: API-Aufruf oder Filter-Logik hinzufügen
  }

  toggleCollapse(categoryName: string): void {
    this.collapsedStates[categoryName] = !this.collapsedStates[categoryName];
  }
}
