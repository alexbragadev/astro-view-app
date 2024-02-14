import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsComponent } from './web-site/news/news.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  exports: [
    NewsComponent
  ],
  providers: [],
  bootstrap: []
})
export class PagesModule { }
