import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-top-nemu',
  templateUrl: './top-nemu.component.html',
  styleUrls: ['./top-nemu.component.css']
})
export class TopNemuComponent implements OnInit {

  data: object[];
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  constructor(public dataService: DataService) {
    this.data = this.dataService.menuItems;
  }

  ngOnInit() {
  }

  openTable(page: string): void {
    this.notify.emit(page);
  }

}
