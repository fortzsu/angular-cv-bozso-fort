import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InfosComponent } from './infos/infos.component';
import { BasicInfosComponent } from './infos/basic-infos/basic-infos.component';
import { InfoPageComponent } from './infos/info-page/info-page.component';
import { InfoPageElementComponent } from './infos/info-page/info-page-element/info-page-element.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfosComponent,
    BasicInfosComponent,
    InfoPageComponent,
    InfoPageElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
