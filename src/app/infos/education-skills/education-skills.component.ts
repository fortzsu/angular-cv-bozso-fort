import {Component, OnInit} from '@angular/core';
import {InfoModel} from "../info.model";
import {InfoService} from "../../info.service";

@Component({
  selector: 'app-education-skills',
  templateUrl: './education-skills.component.html',
  styleUrl: './education-skills.component.css'
})
export class EducationSkillsComponent implements OnInit{

  educationSkills: InfoModel[];

  constructor(private infoService: InfoService) {
  }

  ngOnInit() {
    this.educationSkills = this.infoService.getEducationList();
  }


}
