import {Injectable} from '@angular/core';
import {WorkInfoModel} from "../model/work-info.model";

@Injectable({
  providedIn: 'root'
})
export class WorksService {

  constructor() {
  }

  works: WorkInfoModel[] = [
    new WorkInfoModel(
      'Theatre Reticket',
      ['Google (Sheets) API', 'JPA Criteria Queries',' REST API', 'SQL', 'OAuth 2.0'],
      'Java/Spring Boot event-ticket handling application with reporting',
      'https://github.com/fortzsu/theater_reticket'),
    new WorkInfoModel(
      'Hand history replayer',
      ['Java', 'Angular', 'REST API', 'Spring Boot'],
      'Full-Stack App for parsing Poker Hand History file',
      'https://github.com/fortzsu/hand-history-replayer-spring'),
    new WorkInfoModel(
      'Hand history replayer',
      ['Java'],
      'App for parsing Poker Hand History .txt to Java objects',
      'https://github.com/fortzsu/hand-history-replayer-app'),
    new WorkInfoModel(
      'This CV site',
      ['Angular - Firebase'],
      'Zsuzsanna\'s site',
      'https://github.com/fortzsu/angular-cv-bozso-fort'),
    new WorkInfoModel(
      'Solution to coding challenges',
      ['Java'],
      'Hackerrank',
      'https://github.com/fortzsu/java-challenge-hr')
  ]

  getWorks(): WorkInfoModel[] {
    return this.works.slice();
  }
}
