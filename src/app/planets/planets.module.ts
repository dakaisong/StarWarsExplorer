import { PlanetsRoutingModule } from "./PlanetsRoutingModule";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PlantesComponent } from "./plantes/plantes.component";

@NgModule({
  declarations: [PlantesComponent],
  imports: [CommonModule, PlanetsRoutingModule]
})
export class PlanetsModule {}
