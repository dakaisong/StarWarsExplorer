import { Injectable } from '@angular/core';
import { PaginationResponse } from '@datorama/akita';
import { Observable } from 'rxjs';
import { getContacts } from '../../server';
import { Contact } from 'src/app/model/contact';

@Injectable({ providedIn: 'root' })
export class ContactsService {
  get(params): Observable<PaginationResponse<Contact>> {
    return getContacts(params);
  }
}