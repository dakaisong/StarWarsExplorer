/*
 * write by Dakai Song
 * date 2019-10-14
 */
import { Person } from "./../../model/person";
import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs/operators";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"]
})
export class DetailComponent implements OnInit {
  state$: Observable<Person>;
  person: Person;

  constructor(public activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.state$ = this.activatedRoute.paramMap.pipe(
      map(() => window.history.state)
    );

    this.state$.subscribe(data => {
      this.person = data;
    });
  }
}
