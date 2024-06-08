import { Injectable } from '@angular/core';
import {EducationInfoModel} from "../model/education-info.model";
import {ExperienceInfoModel} from "../model/experience-info.model";

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private experiences: ExperienceInfoModel[] = [
    new ExperienceInfoModel('2021.09. - ', 'Maternity Leave',  [
      'Implementing my own backend hobby project (ticket handler application) from scratch, ' +
      'using Java SE, REST API, Spring Boot.',
      'Improved skills: effective troubleshooting, flexibility and logistics'
    ])
  ]




  private experience4: EducationInfoModel[] = [
    new EducationInfoModel('2020.10. - 2023.06.', ' PROGmasters - Junior Software Developer', 'Implementing my own backend hobby project (ticket handler application) from scratch, using Java SE, REST API, Spring Boot.\n' +
      'Tasks in inner-company development projects (GIT, Maven, Java, Spring Boot)\n' +
      'Mentoring bootcamp students: support Agile teamwork and planning, debugging code\n' +
      'Creating frontend teaching materials (HTML, SCSS, CSS, JS, Angular)\n'),
    new EducationInfoModel('2019.11. - 2020.04.',  'PROGmasters Bootcamp - Software Developer Student',
      ' Working on software project in agile team\n' +
      ' Java, Spring Boot, SQL, JPA, HTML, CSS, Javascript, Angular\n'),
    new EducationInfoModel('2018.03. - 2019.10. ', 'OPEN COMMUNICATIONS - Junior PR Consultant',
      'Project Management / First point of contact for customers\n' +
      'Media monitor and analysis, reporting\n' +
      'Planning and preparing of press events - onsite management\n' +
      'Translation of professional and press materials\n'),
    new EducationInfoModel('2016.06. - 2019.09.', 'SZABAD TÉR THEATRE / BUDAPEST SUMMER FESTIVAL - Audience Development   and Ticket Sales Representative/PPC Campaign Manager',
      'Communication with the customers and the partners\n' +
      'Reporting and working on innovative strategies for promoting ticket sales\n' +
      'Creating and managing Google Ads campaigns for the Budapest Summer Festival \n' +
      'Independent working and cooperation with the marketing leader\n')
  ]

  constructor() { }
}
