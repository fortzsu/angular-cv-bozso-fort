import {Component, OnInit} from '@angular/core';
import {WorkInfoModel} from "../../model/work-info.model";
import {WorksService} from "../../service/works.service";

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent implements OnInit{

  works: WorkInfoModel[];

  constructor(private worksService: WorksService) {}

  ngOnInit() {
    this.works = this.worksService.getWorks();
  }


}
