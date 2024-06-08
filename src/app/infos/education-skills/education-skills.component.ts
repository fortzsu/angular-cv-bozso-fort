import {Component, OnInit} from '@angular/core';
import {EducationInfoModel} from "../../model/education-info.model";
import {EducationService} from "../../service/education.service";

@Component({
  selector: 'app-education-skills',
  templateUrl: './education-skills.component.html',
  styleUrl: './education-skills.component.css'
})
export class EducationSkillsComponent implements OnInit{

  educationSkills: EducationInfoModel[];

  constructor(private infoService: EducationService) {
  }

  ngOnInit() {
    this.educationSkills = this.infoService.getEducationList();
  }


}
