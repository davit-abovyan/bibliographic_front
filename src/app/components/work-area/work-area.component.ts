import {Component, Input, OnInit} from '@angular/core';
import * as _ from 'lodash';
import {DataService} from '../../services/data.service';
import {ConfigService} from '../../services/config.service';

@Component({
  selector: 'app-work-area',
  templateUrl: './work-area.component.html',
  styleUrls: ['./work-area.component.less']
})
export class WorkAreaComponent implements OnInit {

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
  constructor(public configService: ConfigService) {
    this.data = this.configService.menuItems;
  }

  ngOnInit() {
  }

  closeSection(sec: string): void {
    _.pull(this.page, sec);
  }

  checkEdge(event) {
    this.edge = event;
  }

  focuseSelection(id: string): void {
    this.configService.focusWindow(id);
  }

}
