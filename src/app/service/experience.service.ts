import {Injectable} from '@angular/core';
import {ExperienceInfoModel} from "../model/experience-info.model";

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  experiences: ExperienceInfoModel[] = [
    new ExperienceInfoModel('2021.09. - ', 'Maternity Leave', [
      'Implementing my own hobby projects from scratch, using JavaSE, REST API, Spring Boot and Angular.',
      'Improved skills: effective troubleshooting, flexibility and logistics'
    ], ''),
    new ExperienceInfoModel('2020.10. - 2023.06.', 'Junior Software Developer', [
      'Tasks in inner-company development projects (GIT, Maven, JavaSE, Spring Boot)',
      'Mentoring bootcamp students: support Agile teamwork and planning, debugging code',
      'Creating frontend teaching materials (HTML, SCSS, CSS, JS, Angular)'
    ], 'PROGmasters'),
    new ExperienceInfoModel('2019.11. - 2020.04.', 'Software Developer Student',
      ['Working on software project in agile team',
        'Java, Spring Boot, SQL, JPA, HTML, CSS, Javascript, Angular'
      ], 'PROGmasters Bootcamp'),
    new ExperienceInfoModel('2018.03. - 2019.10.', 'Junior PR Consultant', [
      'Media monitor and analysis, reporting',
      'Planning and preparing of press events - onsite management',
      'Translation of professional and press materials'
    ], 'OPEN COMMUNICATIONS'),
    new ExperienceInfoModel('2016.06. - 2019.09.', 'Audience Development and Ticket Sales Representative/PPC Campaign Manager',
      ['Communication with the customers and the partners',
      'Reporting and working on innovative strategies for promoting ticket sales',
      'Creating and managing Google Ads campaigns for the Budapest Summer Festival',
      'Independent working and cooperation with the marketing leader'
      ], 'OPEN AIR THEATRE / BUDAPEST SUMMER FESTIVAL')
  ]

  constructor() {
  }

  getExperience(): ExperienceInfoModel[] {
    return this.experiences.slice();
  }
}
