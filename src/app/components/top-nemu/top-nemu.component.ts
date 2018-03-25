import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ConfigService} from '../../services/config.service';

@Component({
  selector: 'app-top-nemu',
  templateUrl: './top-nemu.component.html',
  styleUrls: ['./top-nemu.component.css']
})
export class TopNemuComponent implements OnInit {

  menu: object[];
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  constructor(public configService: ConfigService) {
    this.menu = this.configService.menuItems;
  }

  ngOnInit() {
  }

  openTable(page: string): void {
    this.notify.emit(page);
  }

}
