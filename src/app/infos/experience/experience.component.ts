import {Component, OnInit} from '@angular/core';
import {ExperienceService} from "../../service/experience.service";
import {ExperienceInfoModel} from "../../model/experience-info.model";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent implements OnInit{

  isTasksShown: boolean = false;

  experiences: ExperienceInfoModel[];

  constructor(private experienceService: ExperienceService) {
  }

  ngOnInit() {
    this.experiences = this.experienceService.getExperience();
  }

  onShowTasks() {
    this.isTasksShown = true;
  }

  onHideTasks() {
    this.isTasksShown = false;
  }
}
