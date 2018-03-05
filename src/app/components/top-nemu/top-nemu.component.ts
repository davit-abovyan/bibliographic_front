import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-top-nemu',
  templateUrl: './top-nemu.component.html',
  styleUrls: ['./top-nemu.component.css']
})
export class TopNemuComponent implements OnInit {

  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  openTable(page: string): void {
    this.notify.emit(page);
  }

}
