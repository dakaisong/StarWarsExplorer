import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxSpinnerModule } from "../../../node_modules/ngx-spinner";
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsRoutingModule } from './contactsRoutingModule';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactsComponent],
  imports: [CommonModule,ContactsRoutingModule,ReactiveFormsModule,FormsModule,NgxSpinnerModule]
})

export class ContactsModule {}