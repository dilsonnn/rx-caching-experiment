import { DocumentServiceApi } from './../infrastructure/document.service.api';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductDocument } from '../model/document';
import { map, shareReplay, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {


  documents$: Observable<ProductDocument[]>;
  agreedDocs: string [] = [];



  constructor(private readonly docApi: DocumentServiceApi){}

  getDocuments(): Observable<ProductDocument[]> {
    if (!this.documents$){
      this.documents$ = this.docApi.getDocuments()
      .pipe(
        map((docs) => docs),
        shareReplay(1),
        catchError(error => of([]))
        ) as Observable<ProductDocument[]>;
    }
    return this.documents$;
  }

  putDocumentAgree(document: ProductDocument): Observable<boolean>{
    if (this.agreedDocs.includes(document.id)){
      console.log('DocumentService.putDocumentAgree() - already agreed with document ', document);
      return of(true);
    }
    return this.docApi.putDocumentAgree(document).pipe(
      map(e => {
        this.agreedDocs.push(document.id);
        document.accepted = true;
        return e;
      })
    );
  }
}
