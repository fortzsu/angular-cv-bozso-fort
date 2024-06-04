import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BasicInfoPageComponent } from './basic-info-page/basic-info-page.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { InfoPageElementComponent } from './info-page-element/info-page-element.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BasicInfoPageComponent,
    InfoPageComponent,
    InfoPageElementComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
