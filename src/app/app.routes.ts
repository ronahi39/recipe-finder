import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' }, // Startseite auf /search umleiten
  { path: 'search', loadChildren: () => import('./features/recipe-search/recipe-search.module').then(m => m.RecipeSearchModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
