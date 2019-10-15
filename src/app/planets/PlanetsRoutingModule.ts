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
