import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WorksComponent} from "./infos/works/works.component";
import {ExperienceComponent} from "./infos/experience/experience.component";
import {EducationSkillsComponent} from "./infos/education-skills/education-skills.component";

const routes: Routes = [
  {path: 'works', component: WorksComponent},
  {path: 'experience', component: ExperienceComponent},
  {path: 'education-skills', component: EducationSkillsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
