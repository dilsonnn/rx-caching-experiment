import { DocumentService } from './services/document.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDocument } from './model/document';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  downloadDoc$: Observable<ProductDocument[]>;
  complete = false;
  isLoadingPutDoc = false;

  constructor(private readonly docService: DocumentService){
    this.downloadDoc$ = this.docService.getDocuments();
  }


  getDocuments(): Observable<ProductDocument[]> {
    return this.docService.getDocuments();
  }

  putDocumentAgree(eventProductTuple: [Event, ProductDocument]): void{
     this.isLoadingPutDoc = true;
     this.docService.putDocumentAgree(eventProductTuple[1])
     .subscribe(e => {
        console.log('AppComponent()  - Agreed with document : ', eventProductTuple[1]);
        this.isLoadingPutDoc = false;
     });
     eventProductTuple[0].preventDefault();
  }


  showAllDocuments(event: Event): void{
    this.complete = true;
    event.preventDefault();
  }
}
