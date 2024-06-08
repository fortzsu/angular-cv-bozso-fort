import { Injectable } from '@angular/core';
import {EducationInfoModel} from "../model/education-info.model";

@Injectable({
  providedIn: 'root'
})
export class EducationService {


  private education: EducationInfoModel[] = [
    new EducationInfoModel('2019.11. - 2020.04.', 'PROGmasters - Bootcamp',
      'Java full-stack software developer course' ),
    new EducationInfoModel('2015.09. - 2019.01.', 'Károli Gáspár University of the Reformed Church in Hungary',
      'Master of Arts in Theatre Studies Msc.' ),
    new EducationInfoModel('2011.09. - 2015.06.', 'Budapest University of Technology and Economics',
      'Communication and Media Studies (International Communication) Bsc.' )
  ];

  constructor() {
  }

  public getEducationList(): EducationInfoModel[] {
    return this.education.slice();
  }
}
