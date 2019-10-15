/*
 * write by Dakai Song
 * date 2019-10-14
 */
import { Person } from "./../../model/person";
import { RestService } from "./../../service/rest.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-people",
  templateUrl: "./people.component.html",
  styleUrls: ["./people.component.scss"]
})
export class PeopleComponent implements OnInit {
  peopleList: Array<Person>;

  constructor(
    private restService: RestService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.getPeopleList();
  }

  private getPeopleList() {
    this.spinner.show();
    this.restService.getPeople().subscribe(data => {
      this.peopleList = data["results"];
      this.spinner.hide();
    });
  }
  // use navigatByUrl move to detai page
  routeWithData($eventP) {
    let item = $eventP;
    console.log(item);
    this.router.navigateByUrl("/people/detail", { state: item });
  }
}
