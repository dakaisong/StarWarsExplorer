import { Planet } from "./../../model/planet";
import { Component, OnInit } from "@angular/core";
import { RestService } from "src/app/service/rest.service";

@Component({
  selector: "app-plantes",
  templateUrl: "./plantes.component.html",
  styleUrls: ["./plantes.component.scss"]
})
export class PlantesComponent implements OnInit {
  planets: Array<Planet>;

  constructor(private restService: RestService) {}

  ngOnInit() {
    console.log("planet");
    this.getPeopleList();
  }

  private getPeopleList() {
    this.restService.getPlanets().subscribe(data => {
      this.planets = data["results"];
      console.log(this.planets);
    });
  }
}
