import { Injectable } from '@angular/core';
import {WorkInfoModel} from "../model/work-info.model";

@Injectable({
  providedIn: 'root'
})
export class WorksService {

  constructor() { }

  works: WorkInfoModel[] = [
    new WorkInfoModel(
      'Theatre Reticket',
      ['Java', 'Spring Boot', 'REST API', 'SQL', 'OAuth 2.0', 'Google (Sheets) API', 'JPA Criteria Queries'],
      'Event ticket (re)handling application with reporting.',
      'https://github.com/fortzsu/theater_reticket'),
    new WorkInfoModel(
      'Hand history replayer',
      ['Java', 'Angular', 'REST API', 'Spring Boot'],
      'desciption',
      'https://github.com/fortzsu/hand-history-replayer-spring'),
    new WorkInfoModel(
      'Hand history replayer',
      ['Java', 'HTML'],
      'desciption',
      'https://github.com/fortzsu/hand-history-replayer-app'),
    new WorkInfoModel(
      'CV site',
      [],
      'description',
    'https://github.com/fortzsu/angular-cv-bozso-fort')
  ]

  getWorks(): WorkInfoModel[] {
    return this.works.slice();
  }
}
