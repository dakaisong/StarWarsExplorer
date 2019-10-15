/*
 * write by Dakai Song
 * date 2019-10-14
 */
import { Planet } from "./../../model/planet";
import { Component, OnInit } from "@angular/core";
import { RestService } from "src/app/service/rest.service";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-plantes",
  templateUrl: "./plantes.component.html",
  styleUrls: ["./plantes.component.scss"]
})
export class PlantesComponent implements OnInit {
  planets: Array<Planet>;

  constructor(
    private restService: RestService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    console.log("planet");
    this.getPeopleList();
  }

  private getPeopleList() {
    this.spinner.show();
    this.restService.mockHTTPRequest("planets").subscribe(data => {
      this.planets = data["results"];
      this.spinner.hide();
    });
  }
}
