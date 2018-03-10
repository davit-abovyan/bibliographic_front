import {Component, Input, OnInit} from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-controll-panel',
  templateUrl: './controll-panel.component.html',
  styleUrls: ['./controll-panel.component.css']
})
export class ControllPanelComponent implements OnInit {

  @Input() page: string[];
  constructor() { }

  ngOnInit() {
  }

  closeAllWindows(): void {
    _.pullAll(this.page, this.page);
  }
}
