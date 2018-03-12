import { Component, OnInit } from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';

@Component({
  selector: 'app-notification-modal',
  templateUrl: './notification-modal.component.html',
  styleUrls: ['./notification-modal.component.css']
})
export class NotificationModalComponent implements OnInit {
  public active = false;
  public body: string;
  public title: string;

  public constructor(
    private _bsModalRef: BsModalRef
  ) { }

  ngOnInit() {
  }

  public showNotificationModal(title: string, body: string): void {
    this.title = title;
    this.body =  body;
    this.active = true;
  }

  public hideConfirmationModal(): void {
    this.active = false;
    this._bsModalRef.hide();
  }
}
