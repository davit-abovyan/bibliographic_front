import {Component, Input, OnInit} from '@angular/core';
import * as _ from 'lodash';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-work-area',
  templateUrl: './work-area.component.html',
  styleUrls: ['./work-area.component.css']
})
export class WorkAreaComponent implements OnInit {

  // used for dragability
  useHandle = true;
  inBounds = true;
  edge = {
    top: true,
    bottom: true,
    left: true,
    right: true
  };

  // used instead of global data
  data: object[];

  @Input() page: string[];
  constructor(public dataService: DataService) {
    this.data = this.dataService.menuItems;
    console.log(this.data);
  }

  ngOnInit() {
  }

  closeSection(sec: string): void {
    _.pull(this.page, sec);
  }

  checkEdge(event) {
    this.edge = event;
  }

  focuseSelection(): void {
  // this.zIndex = this.zIndex + 1;
  }

}
