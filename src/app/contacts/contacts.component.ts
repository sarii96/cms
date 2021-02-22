import { Component, OnInit } from '@angular/core';
import { Contact } from '../contacts/contact.model';
import {ContactService } from './contact.service';

@Component({
  selector: 'cms-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  constructor(private contactService: ContactService) { }

  ngOnInit() {


  }

}
