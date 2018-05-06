import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SearchComponent } from "./searching/search/search.component";
import { CookerComponent } from "./cooker/cooker/cooker.component";
import { MealsComponent } from "./meals/meals/meals.component";

const routes: Routes = [
  { path: "", component: SearchComponent },
  { path: "cooker/:id", component: CookerComponent },
  { path: "meal/:id", component: MealsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
