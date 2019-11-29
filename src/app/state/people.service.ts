import { PeopleStore } from './people.store';
import { RestService } from './../service/rest.service';
import { PeopleQuery } from './people.query';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, tap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

@Injectable({providedIn:'root'})
export class PeopleService{
    constructor(private store: PeopleStore, private restService: RestService, private peopleQuery: PeopleQuery,private http: HttpClient){}
    baseUrl = "https://swapi.co/api/";

    getPeople(){
        return this.http.get(this.baseUrl + 'people').pipe(
            retry(3),
            catchError(this.restService.handleError)
          ).subscribe((people:any)=>{
            console.log(people['results'])
            this.store.set(people['results'])
        })
    }

    getPersonByName(name:string){
        return this.http.get(this.baseUrl+`people/?search=${name}`).pipe(
            retry(3),
            catchError(this.restService.handleError),
            tap(person=>this.store.upsert(name,person))
        )
    }
}