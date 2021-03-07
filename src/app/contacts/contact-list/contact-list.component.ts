import { Component, OnDestroy, OnInit } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit, OnDestroy {
  contacts: Contact[] = [];
  subscription: Subscription;
  term: String;

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.subscription = this.contactService.contactListChangedEvent.subscribe(
      (contacts: Contact[]) => {
        this.contacts = contacts;
      }
    );

    this.contactService.getContacts();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  search(value: string) {
    this.term = value;
  }
}
//   }

//   onSelected(contact: Contact){
// this.contactService.contactSelectedEvent.emit(contact);
//   }

// }
