import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeSearchComponent} from "./pages/recipe-search/recipe-search.component";

const routes: Routes = [
  { path: '', component: RecipeSearchComponent } // Basis-Route für "search"
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeSearchRoutingModule { }
