/*
 * write by Dakai Song
 * date 2019-10-14
 */
import { Person } from "./../../model/person";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { PeopleQuery } from 'src/app/state/people.query';
import { PeopleService } from 'src/app/state/people.service';
import { Observable } from 'rxjs';

@Component({
  selector: "app-people",
  templateUrl: "./people.component.html",
  styleUrls: ["./people.component.scss"]
})
export class PeopleComponent implements OnInit {
  // peopleList: Array<PeopleModule>;
  isLoading$:Observable<boolean>;
  peopleList$:Observable<Person[]> 
  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
    private peopleQuery: PeopleQuery,
    private peopleService: PeopleService
  ) {}

  ngOnInit() {
    this.isLoading$ = this.peopleQuery.selectLoading();
    this.peopleService.getPeople();
    this.peopleList$ = this.peopleQuery.selectAll();

  }

  // private getPeopleList() {
  //   this.spinner.show();
  //   this.restService.mockHTTPRequest("people").subscribe(data => {
  //     this.peopleList = data["results"];
  //     this.spinner.hide();
  //   }, (error) => {

  //   });
  // }
  // use navigatByUrl move to detai page
  routeWithData($eventP) {
    let item = $eventP;
    console.log(item);
    this.router.navigateByUrl("/people/detail", { state: item.name });
  }
}
