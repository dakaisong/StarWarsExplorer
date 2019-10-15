import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "people",
    loadChildren: () =>
      import("./people/people.module").then(m => m.PeopleModule)
  },
  {
    path: "movies",
    loadChildren: () => import("./movie/movie.module").then(m => m.MovieModule)
  },
  {
    path: "planets",
    loadChildren: () =>
      import("./planets/planets.module").then(m => m.PlanetsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
