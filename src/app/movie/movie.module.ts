import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MovieComponent } from "./movie/movie.component";
import { MovieRoutingModule } from "./movie-routing.module";
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";
import { MyMovieComponent } from "../component/my-movie/my-movie.component";
import { AngularFontAwesomeModule } from "angular-font-awesome";

@NgModule({
  declarations: [MovieComponent, MovieDetailComponent, MyMovieComponent],
  imports: [CommonModule, MovieRoutingModule, AngularFontAwesomeModule]
})
export class MovieModule {}
