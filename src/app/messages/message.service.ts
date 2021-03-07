import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Message } from './message.model';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messages: Message[] = [];
  messageListChangedEvent = new Subject<Message[]>();
  maxMessageId: number;

  constructor(private http: HttpClient) {}

  addMessage(newMessage: Message) {
    if (!newMessage) {
      return;
    }
    this.maxMessageId++;

    newMessage.id = this.maxMessageId.toString();

    this.messages.push(newMessage);

    this.storeMessages();
  }

  getMessage(id: string): Message {
    return this.messages.find((message) => message.id === id);
  }

  getMessages() {
    this.http
      .get('https://wdd-430-project-default-rtdb.firebaseio.com/messages.json')
      .subscribe(
        // success method
        (messages: Message[]) => {
          this.messages = messages;
          this.maxMessageId = this.getMaxId();

          this.messages.sort((a, b) =>
            a.subject > b.subject ? 1 : b.subject > a.subject ? -1 : 0
          );
          this.messageListChangedEvent.next(this.messages.slice());
        },
        // error method
        (error: any) => {
          console.log(error);
        }
      );
  }

  getMaxId(): number {
    let maxId = 0;
    for (const message of this.messages) {
      let currentId = parseInt(message.id);
      if (currentId > maxId) {
        maxId = currentId;
      }
    }
    return maxId;
  }

  storeMessages() {
    let messages = JSON.stringify(this.messages);

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http
      .put(
        'https://wdd-430-project-default-rtdb.firebaseio.com/messages.json',
        messages,
        { headers: headers }
      )
      .subscribe(() => {
        this.messageListChangedEvent.next(this.messages.slice());
      });
  }
}
