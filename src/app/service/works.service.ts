import { Injectable } from '@angular/core';
import {WorkInfoModel} from "../model/work-info.model";

@Injectable({
  providedIn: 'root'
})
export class WorksService {

  constructor() { }

  works: WorkInfoModel[] = [
    new WorkInfoModel('Theatre Reticket', 'Backend application for (event)ticket handling, where the users - admins and visitors - could reserve, buy and resell tickets. The admins have access to extended functions like reporting and managing visitor user accounts, creating events (e.g. plays and performances).\n' +
      'This is a project for practicing Java/Spring Boot/SQL and expand my horizon with other technologies (OAuth 2.0 and Google API, Google Sheets API, JPA Criteria Queries).\n',
      'https://github.com/fortzsu/theater_reticket'),
    new WorkInfoModel('Hand history replayer - Angular & Java', 'desciption',
      'https://github.com/fortzsu/hand-history-replayer-spring'),
    new WorkInfoModel('Hand history replayer - Plain Java & HTML', 'desciption',
      'https://github.com/fortzsu/hand-history-replayer-app'),
    new WorkInfoModel('CV site', 'description',
    'https://github.com/fortzsu/angular-cv-bozso-fort')
  ]

  getWorks(): WorkInfoModel[] {
    return this.works.slice();
  }
}
