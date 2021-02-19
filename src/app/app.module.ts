import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { HeaderComponent } from './header.component';
import { ContactItemComponent } from './contacts/contact-item/contact-item.component';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentDetailComponent } from './documents/document-detail/document-detail.component';
import { DocumentItemComponent } from './documents/document-item/document-item.component';
import { DocumentListComponent } from './documents/document-list/document-list.component';
import {MessageEditComponent} from './messages/message-edit/message-edit.component';
import {MessageItemComponent} from './messages/message-item/message-item.component';
import {MessageListComponent} from './messages/message-list/message-list.component';
import { DropdownDirective } from './dropdown.directive';
import {AppRoutingModule} from './app-routing.module';
import {DocumentEditComponent} from './documents/document-edit/document-edit.component';
import{ContactEditComponent} from './contacts/contact-edit/contact-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactListComponent,
    ContactDetailComponent,
    HeaderComponent,
    ContactItemComponent,
    DocumentsComponent,
    DocumentDetailComponent,
    DocumentItemComponent,
    DocumentListComponent,
    MessageEditComponent,
    MessageItemComponent,
    MessageListComponent,
    DropdownDirective,
    DocumentEditComponent,
    ContactEditComponent

   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
