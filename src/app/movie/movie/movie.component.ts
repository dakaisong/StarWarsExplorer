import { RestService } from "./../../service/rest.service";
import { Component, OnInit } from "@angular/core";
import { Movies } from "src/app/model/movies";
import { Router } from "@angular/router";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.scss"]
})
export class MovieComponent implements OnInit {
  films: Array<Movies>;
  constructor(private restService: RestService, private router: Router) {}

  ngOnInit() {
    this.getFilms();
  }

  private getFilms() {
    this.restService.getFilms().subscribe(data => {
      this.films = data["results"];
      console.log(this.films);
    });
  }

  routeWithData($eventP) {
    let item = $eventP;
    console.log(item);
    this.router.navigateByUrl("/people/detail", { state: item });
  }
}
