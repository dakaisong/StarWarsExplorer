/*
 * write by Dakai Song
 * date 2019-10-14
 */
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

  mockHTTPRequest(urlP: string) {
    let url = urlP;
    return this.http.get(this.baseUrl + url).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }
}
