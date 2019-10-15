import { Person } from "./../../model/person";
import { RestService } from "./../../service/rest.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-people",
  templateUrl: "./people.component.html",
  styleUrls: ["./people.component.scss"]
})
export class PeopleComponent implements OnInit {
  peopleList: Array<Person>;

  constructor(private restService: RestService, private router: Router) {}

  ngOnInit() {
    this.getPeopleList();
  }

  private getPeopleList() {
    this.restService.getPeople().subscribe(data => {
      this.peopleList = data["results"];
    });
  }

  routeWithData($eventP) {
    let item = $eventP;
    console.log(item);
    this.router.navigateByUrl("/people/detail", { state: item });
  }
}
