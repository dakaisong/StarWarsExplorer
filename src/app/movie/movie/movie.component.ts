/*
 * write by Dakai Song
 * date 2019-10-14
 */
import { RestService } from "./../../service/rest.service";
import { Component, OnInit } from "@angular/core";
import { Movies } from "src/app/model/movies";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.scss"]
})
export class MovieComponent implements OnInit {
  films: Array<Movies>;
  constructor(
    private restService: RestService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.getFilms();
  }

  private getFilms() {
    this.spinner.show();
    this.restService.mockHTTPRequest("films").subscribe(data => {
      this.films = data["results"];
      this.spinner.hide();
    });
  }
  // use navigatByUrl move to detai page
  routeWithData($eventP) {
    let item = $eventP;
    this.router.navigateByUrl("/movies/detail", { state: item });
  }
}
