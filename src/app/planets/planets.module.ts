/*
 * write by Dakai Song
 * date 2019-10-14
 */
import { PlanetsRoutingModule } from "./PlanetsRoutingModule";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PlantesComponent } from "./plantes/plantes.component";
import { NgxSpinnerModule } from "../../../node_modules/ngx-spinner";

@NgModule({
  declarations: [PlantesComponent],
  imports: [CommonModule, PlanetsRoutingModule, NgxSpinnerModule]
})
export class PlanetsModule {}
