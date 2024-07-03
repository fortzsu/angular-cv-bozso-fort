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
      ['Google (Sheets) API', 'JPA Criteria Queries',' REST API', 'SQL', 'OAuth 2.0', 'MapStruct', 'Lombok'],
      'Java/Spring Boot event-ticket handling application with reporting',
      'https://github.com/fortzsu/theater_reticket'),
    new WorkInfoModel(
      'Hand history replayer',
      ['Java', 'Angular', 'REST API', 'Spring Boot'],
      'Full-Stack App for parsing Poker Hands and display values',
      'https://github.com/fortzsu/hand-history-replayer-spring'),
    new WorkInfoModel(
      'Hand history replayer',
      ['Java', 'HTML'],
      'App for parsing Poker Hands from .txt to Java objects',
      'https://github.com/fortzsu/hand-history-replayer-app'),
    new WorkInfoModel(
      'This CV site',
      [],
      'Angular - Firebase',
      'https://github.com/fortzsu/angular-cv-bozso-fort')
  ]

  getWorks(): WorkInfoModel[] {
    return this.works.slice();
  }
}
