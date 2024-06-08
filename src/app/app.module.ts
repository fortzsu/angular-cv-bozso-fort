import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InfosComponent } from './infos/infos.component';
import { BasicInfosComponent } from './infos/basic-infos/basic-infos.component';
import { WorksComponent } from './infos/works/works.component';
import { ExperienceComponent } from './infos/experience/experience.component';
import { EducationComponent } from './infos/education/education.component';
import {NgOptimizedImage} from "@angular/common";
import { SkillsComponent } from './infos/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfosComponent,
    BasicInfosComponent,
    WorksComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
