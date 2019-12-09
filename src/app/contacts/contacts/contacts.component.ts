import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { CONTACTS_PAGINATOR } from 'src/app/state/contact-pagination';
import { PaginatorPlugin, PaginationResponse } from '@datorama/akita';
import { Contact } from 'src/app/model/contact';
import { ContactsService } from 'src/app/state/contacts/contacts.service';
import { FormControl } from '@angular/forms';
import { Observable, combineLatest } from 'rxjs';
import { startWith, tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit, OnDestroy {
  contacts$;
  sortByControl: FormControl;
  
  constructor(@Inject(CONTACTS_PAGINATOR) private paginatorRef: PaginatorPlugin<Contact>, private contactsService: ContactsService) { }

  ngOnInit() {
    const sortByValue = this.paginatorRef.metadata.get('sortBy') || 'name';
    this.sortByControl = new FormControl(sortByValue);

    const sort$ = this.sortByControl.valueChanges.pipe(startWith(sortByValue));

    this.contacts$ = combineLatest([sort$.pipe(tap(() => this.paginatorRef.clearCache())), this.paginatorRef.pageChanges]).pipe(
      switchMap(([sortBy, page]) => {
        const requestFn = () => this.contactsService.get({ page, sortBy });
        this.paginatorRef.metadata.set('sortBy', sortBy);
        return this.paginatorRef.getPage(requestFn);
      })
    );
  }

  ngOnDestroy() {
    this.paginatorRef.destroy();
  }

}
