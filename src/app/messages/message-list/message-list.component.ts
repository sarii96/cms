import { Component, OnInit } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Message [] = [
    new Message('1', 'Subject 1', 'Message Text 1', 'Brother Barzee'),
    new Message('2', 'Subject 2','Message Text 2', 'Brother Jackson '),
    new Message('3', 'Subject 3', 'Message Text 3', 'Brother Thayne'),
    new Message('4', 'Subject 4', 'Message Text 4', 'Brother Thompson')
  ];


  constructor() { }

  ngOnInit() {
  }
  onAddMessage(message: Message){
    this.messages.push(message);
  }
}
