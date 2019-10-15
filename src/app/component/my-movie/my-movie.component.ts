/*
 * write by Dakai Song
 * date 2019-10-14
 */
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Movies } from "src/app/model/movies";

@Component({
  selector: "my-movie",
  templateUrl: "./my-movie.component.html",
  styleUrls: ["./my-movie.component.scss"]
})
export class MyMovieComponent {
  @Input() title: string;
  @Input() release: string;
  @Input() director: string;
  @Input() producer: string;
  @Output() buttonClick = new EventEmitter();

  public goPage(): void {
    this.buttonClick.emit(null);
  }
}
