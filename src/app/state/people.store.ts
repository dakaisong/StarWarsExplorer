import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { Person } from './../model/person';
import { PeopleState } from './people.store';

export interface PeopleState extends EntityState<Person>{}

@Injectable({providedIn:'root'})
@StoreConfig({name:'people',idKey: 'name'})
export class PeopleStore extends EntityStore<PeopleState,Person>{
    constructor(){
        super();
    }
}