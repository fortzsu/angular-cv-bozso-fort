import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WorksComponent} from "./infos/works/works.component";
import {ExperienceComponent} from "./infos/experience/experience.component";
import {EducationComponent} from "./infos/education/education.component";
import {SkillsComponent} from "./infos/skills/skills.component";

const routes: Routes = [
  {path: '', component: WorksComponent},
  {path: 'works', component: WorksComponent},
  {path: 'experience', component: ExperienceComponent},
  {path: 'education', component: EducationComponent},
  {path: 'skills', component: SkillsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
