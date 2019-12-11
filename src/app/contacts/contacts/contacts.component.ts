import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { CONTACTS_PAGINATOR } from 'src/app/state/contact-pagination';
import { PaginatorPlugin, PaginationResponse } from '@datorama/akita';
import { Contact } from 'src/app/model/contact';
import { ContactsService } from 'src/app/state/contacts/contacts.service';
import { FormControl } from '@angular/forms';
import { Observable, combineLatest } from 'rxjs';
import { startWith, tap, switchMap, debounceTime, distinctUntilChanged, mergeMap } from 'rxjs/operators';
import { ContactsState } from './../../state/contacts/contacts.store';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit, OnDestroy {
  contacts:any;
  sortByControl: FormControl;
  filter = new FormControl('');
  
  constructor(@Inject(CONTACTS_PAGINATOR) private paginatorRef: PaginatorPlugin<ContactsState>, private contactsService: ContactsService) { }

  ngOnInit() {
    const sortByValue = this.paginatorRef.metadata.get('sortBy') || 'name';
    this.sortByControl = new FormControl(sortByValue);

    const sort$ = this.sortByControl.valueChanges.pipe(startWith(sortByValue));

   combineLatest([sort$.pipe(tap(() => this.paginatorRef.clearCache())), this.paginatorRef.pageChanges]).pipe(
      switchMap(([sortBy, page]) => {
        const requestFn = () => this.contactsService.get({ page, sortBy });
        this.paginatorRef.metadata.set('sortBy', sortBy);
        return this.paginatorRef.getPage(requestFn);
      })
    ).subscribe(data=> this.contacts = data);

    this.doFilter();
  }


  doFilter(){
    const sortByValue = this.paginatorRef.metadata.get('sortBy') || 'name';

    combineLatest([this.filter.valueChanges.pipe(tap(()=>this.paginatorRef.clearCache())),this.paginatorRef.pageChanges]).pipe(
      switchMap(([name,page]) =>{
        const requestFn = () => this.contactsService.getByName({ name,page});
        this.paginatorRef.metadata.set('sortBy',sortByValue);
        return this.paginatorRef.getPage(requestFn);
      })
    ).subscribe(data=> this.contacts = data);
  }

  ngOnDestroy() {
    this.paginatorRef.destroy();
  }

}
