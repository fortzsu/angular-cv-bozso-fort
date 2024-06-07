import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InfosComponent } from './infos/infos.component';
import { BasicInfosComponent } from './infos/basic-infos/basic-infos.component';
import { InfoPageElementComponent } from './infos/info-page-element/info-page-element.component';
import { WorksComponent } from './infos/works/works.component';
import { ExperienceComponent } from './infos/experience/experience.component';
import { EducationSkillsComponent } from './infos/education-skills/education-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfosComponent,
    BasicInfosComponent,
    InfoPageElementComponent,
    WorksComponent,
    ExperienceComponent,
    EducationSkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
