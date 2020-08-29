import { DocumentServiceApi } from './document.service.api';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    DocumentServiceApi
  ]
})
export class InfrastructureModule {

}
