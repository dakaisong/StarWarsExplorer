import { QueryEntity } from '@datorama/akita';
import { PeopleState, PeopleStore } from './people.store';
import { Injectable } from '@angular/core';
import { Person } from './../model/person';

@Injectable({providedIn:'root'})
export class PeopleQuery extends QueryEntity<PeopleState, Person>{
    constructor(protected store: PeopleStore){
        super(store);
    }

    hasPerson(name:string){
        return this.hasEntity(name);
    }
}