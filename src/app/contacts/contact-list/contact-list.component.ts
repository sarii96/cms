import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor() { }
  @Output() selectedContactEvent = new EventEmitter<Contact> ();

contacts: Contact[] = [
    new Contact(
      '1',
      'Brother Barzee',
      'barzeer@byui.edu',
      '208-496-3768',
      'https://web.byui.edu/Directory/Employee/barzeer.jpg',
       null
        ),

    new Contact(
      '2',
      'Brother Jackson',
       'jacksonk@byui.edu',
       '208-496-3771',
       'https://web.byui.edu/Directory/Employee/jacksonk.jpg',
       null
       ),
    new Contact(
      '3',
      'Brother Thayne',
      'thayneti@byui.edu',
      '208-496-3777',
      'http://web.byui.edu/Directory/Employee/thayneti.jpg',
      null
      ),
    new Contact(
      '4',
      'Brother Thompson',
      ' thompsonda@byui.edu',
      '208-496-3739',
      'http://web.byui.edu/Directory/Employee/thompsonda.jpg',
       null
       ),
  ];
  ngOnInit() {}
  onSelected(contact: Contact){
this.selectedContactEvent.emit(contact);
  }

}
