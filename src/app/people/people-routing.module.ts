/*
 * write by Dakai Song
 * date 2019-10-14
 */
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PeopleComponent } from "./people/people.component";
import { DetailComponent } from "./detail/detail.component";

const routes: Routes = [
  {
    path: "",
    component: PeopleComponent
  },
  {
    path: "detail/:id",
    component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule {}
