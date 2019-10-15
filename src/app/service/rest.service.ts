import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { HttpErrorResponse } from "@angular/common/http";

import { throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class RestService {
  baseUrl = "https://swapi.co/api/";
  constructor(private http: HttpClient) {}

  handleError(error: HttpErrorResponse) {
    let errorMessage = "Unknown error!";
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  getPeople() {
    return this.http.get(this.baseUrl + "people").pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  getFilms() {
    return this.http.get(this.baseUrl + "films").pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  getPlanets() {
    return this.http.get(this.baseUrl + "planets").pipe(
      retry(3),
      catchError(this.handleError)
    );
  }
}
