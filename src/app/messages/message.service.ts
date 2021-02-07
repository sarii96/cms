import { Injectable, EventEmitter } from '@angular/core';
import {Message} from './message.model';
import {MOCKMESSAGES} from './MOCKMESSAGES';

@Injectable({
  providedIn: 'root'
})

export class MessageService {
  private messages: Message[] =[];
  messageSelectedEvent = new EventEmitter<Message>()

  constructor() {
    this.messages = MOCKMESSAGES;
  }
  getMessages(): Message[]{
    return this.messages
    .sort((a, b) => a.msgText > b.msgText ? 1 : b.msgText > a.msgText ? -1: 0)
    .slice();
  }

  getMessage(id:string): Message {
    return this.messages.find((message)=> message.id === id);
  }
}
