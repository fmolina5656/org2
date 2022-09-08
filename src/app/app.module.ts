import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxOrgChartModule } from 'ngx-org-chart';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  HttpClient,
} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrgComponent } from './org/org.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    OrgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxOrgChartModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
