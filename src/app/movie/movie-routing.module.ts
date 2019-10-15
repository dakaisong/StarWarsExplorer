/*
 * write by Dakai Song
 * date 2019-10-14
 */
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MovieComponent } from "./movie/movie.component";
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";

const routes: Routes = [
  {
    path: "",
    component: MovieComponent
  },
  {
    path: "detail",
    component: MovieDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule {}
