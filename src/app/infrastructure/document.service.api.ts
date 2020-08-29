import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { ProductDocument } from '../model/document';

@Injectable({
  providedIn: 'root'
})
export class DocumentServiceApi {

  serviceUrl = 'https://gist.githubusercontent.com/dilsonnn/ef6899d79b2f0cabeb803240daffaf05/raw/2d6cf00f53245777a4584eee8e9c402265c6a765/docs.json';

  constructor(private readonly http: HttpClient){}


  getDocuments(): Observable<ProductDocument[]> {
    return this.http.get<ProductDocument[]>(this.serviceUrl);
  }

  putDocumentAgree(document: ProductDocument): Observable<boolean> {
    return of<boolean>(true)
      .pipe(
        map((t) => {
          console.log('DocumentServiceApi().putDocumentAgree(' + document.id + ')');
          return t;
        }),
        delay(2000)
      );
  }

}
