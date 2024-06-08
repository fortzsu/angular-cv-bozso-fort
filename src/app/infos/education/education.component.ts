import {Component, OnInit} from '@angular/core';
import {EducationInfoModel} from "../../model/education-info.model";
import {EducationService} from "../../service/education.service";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements OnInit{

  educationSkills: EducationInfoModel[];

  constructor(private infoService: EducationService) {
  }

  ngOnInit() {
    this.educationSkills = this.infoService.getEducationList();
  }


}
