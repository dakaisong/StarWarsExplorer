import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "my-card",
  templateUrl: "./my-card.component.html",
  styleUrls: ["./my-card.component.scss"]
})
export class MyCardComponent {
  @Input() name: string;
  @Output() buttonClick = new EventEmitter();

  public goPage(): void {
    this.buttonClick.emit(null);
  }
}
