import { Injectable } from '@angular/core';
import {InfoModel} from "./infos/info.model";

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  private education: InfoModel[] = [
    new InfoModel('2019.11. - 2020.04.', 'PROGmasters',
      'Java full-stack software developer course' ),
    new InfoModel('2015.09. - 2019.01.', 'Károli Gáspár University of the Reformed Church in Hungary',
      'Master of Arts in Theatre Studies Msc.' ),
    new InfoModel('2011.09. - 2015.06.', 'Budapest University of Technology and Economics',
      'Communication and Media Studies (International Communication) Bsc.' )
  ];

  constructor() {
  }

  public getEducationList(): InfoModel[] {
    return this.education.slice();
  }
}
