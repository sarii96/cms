import { Component, OnInit } from '@angular/core';
// import { Subscription } from 'rxjs';
import{ Document } from '../documents/document.model';
import {DocumentService} from '../documents/document.service';


@Component({
  selector: 'cms-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {


  constructor(private documentService: DocumentService) { }

  ngOnInit(){

  }

}
