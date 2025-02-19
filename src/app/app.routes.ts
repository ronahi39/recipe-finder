import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecipeSearchComponent} from "./features/recipe-search/pages/recipe-search/recipe-search.component";

export const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' }, // Startseite auf /search umleiten
  { path: 'search',  component: RecipeSearchComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
