/*
 * write by Dakai Song
 * date 2019-10-14
 */
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PlantesComponent } from "./plantes/plantes.component";

const routes: Routes = [
  {
    path: "",
    component: PlantesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetsRoutingModule {}
