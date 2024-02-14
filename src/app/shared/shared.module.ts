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
import { TemplateTitleTextComponent } from './components/web-site/template-title-text/template-title-text.component';

@NgModule({
  declarations: [
    HeaderComponent,
    TemplateTitleTextComponent
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
    HeaderComponent,
    TemplateTitleTextComponent
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
