import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SliderModule } from 'primeng/slider';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MenuModule } from 'primeng/menu';

import { AppRoutingModule } from './../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/web-site/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SliderModule,
    FormsModule,
    MenuModule,
    ToastModule,
    ButtonModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
