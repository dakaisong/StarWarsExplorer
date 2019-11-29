/*
 * write by Dakai Song
 * date 2019-10-14
 */
import { Person } from "./../../model/person";
import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PeopleQuery } from 'src/app/state/people.query';
import { PeopleService } from 'src/app/state/people.service';
import { map } from 'rxjs/operators';

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"]
})
export class DetailComponent implements OnInit {
  // state$: Observable<Person>;
  // person: Person;
  person$ = this.peopleQuery.selectEntity(this.personName);
  name:string;

  constructor(public activatedRoute: ActivatedRoute, private peopleQuery: PeopleQuery, private peopleService: PeopleService) {}

  ngOnInit() {
    // this.state$ = this.activatedRoute.paramMap.pipe(
    //   map(() => window.history.state)
    // );

    // this.state$.subscribe(data => {
    //   this.person = data;
    // });
    if(this.peopleQuery.hasPerson(this.personName) === false){
      this.peopleService.getPersonByName(this.personName)
    }
  }

  get personName(){
    // this.activatedRoute.paramMap.pipe(
    //   map(() => window.history.state)
    // ).subscribe(data=> {this.name = data});
    return this.activatedRoute.snapshot.params.id
  }
}
