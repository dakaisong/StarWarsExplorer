/*
 * write by Dakai Song
 * date 2019-10-14
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PeopleComponent } from "./people/people.component";
import { PeopleRoutingModule } from "./people-routing.module";
import { MyCardComponent } from "../component/my-card/my-card.component";
import { DetailComponent } from "./detail/detail.component";
import { NgxSpinnerModule } from "../../../node_modules/ngx-spinner";

@NgModule({
  declarations: [PeopleComponent, MyCardComponent, DetailComponent],
  imports: [CommonModule, PeopleRoutingModule, NgxSpinnerModule]
})
export class PeopleModule {}
