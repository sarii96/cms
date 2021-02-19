import { Component, OnInit } from '@angular/core';
import{ Document } from '../documents/document.model';
import {DocumentService} from '../documents/document.service';

@Component({
  selector: 'cms-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
selectedDocument: Document;
  constructor(private documentService: DocumentService) { }

  ngOnInit(){
    this.documentService.documentChangedEvent.subscribe(
      (document: Document) =>{
        this.selectedDocument = document;
      }
      );
  }

}
