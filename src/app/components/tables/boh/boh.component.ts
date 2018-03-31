import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from '../../../services/api.service';
import * as _ from 'lodash';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {ConfirmationModalComponent} from '../../templates/confirmation-modal/confirmation-modal.component';
import {BsModalService} from 'ngx-bootstrap';
import {Boh} from '../../../entity/boh';
import {NotificationModalComponent} from '../../templates/notification-modal/notification-modal.component';

@Component({
  selector: 'app-boh',
  templateUrl: './boh.component.html',
  styleUrls: ['./boh.component.css']
})
export class BohComponent implements OnInit {
  public items: Array<any> = [];
  public isLoaded = false;
  public editRowId = -1;

  public newBoh: string;
  public editedBoh: string;

  constructor(private apiService: ApiService, private modalService: BsModalService) {
  }

  ngOnInit() {
    this.getBoh();
  }

  getBoh(): void {
    this.apiService.getBoh().subscribe(objects => {
      this.items = this.apiService.selectableOperator(objects);
      this.isLoaded = true;
    });
  }

  addBoh(): void {
    const body = '{"name": "' + this.newBoh + '"}';
    this.apiService.addBoh(JSON.parse(body))
      .subscribe(() => {
        this.newBoh = '';
        this.getBoh();
      });
  }

  copyBoh(id: number): void {
    const object: Boh[] = _.filter(this.items, {'id': id});
    const body = '{"name": "' + object[0].name + ' (copy)"}';
    this.apiService.addBoh(JSON.parse(body))
      .subscribe(() => {
        this.getBoh();
        }, (err: HttpErrorResponse) => {
          if (err.status === 409) {
           this.showNotification(err.status, err.error);
         }
         console.log(err.status + ' ' + err.error);
        }
      );
  }

  editBoh(id: number): void {
    this.editRowId = id;
  }

  removeBoh(id: string): void {
    this.showConfirmationModal(id);
  }

  edit(id: number): void {
    if (this.editedBoh === undefined) {
      this.editRowId = -1;
    } else {
      const body = '{"id":"' + id + '", "name": "' + this.editedBoh + '"}';
      this.apiService.editBoh(JSON.parse(body))
        .subscribe(() => {
          this.editedBoh = '';
          this.editRowId = -1;
          this.getBoh();
        });
    }
  }


  remove(id: string): void {
    this.apiService.removeBoh(id)
      .subscribe(() => {
        this.getBoh();
      }
    );
  }

  cancelEdit(): void {
    this.editedBoh = '';
    this.editRowId = -1;
  }

  public showNotification(code: number, error: string) {
    const modal = this.modalService.show(NotificationModalComponent);
    (<NotificationModalComponent>modal.content).showNotificationModal(
      'Սխալի մասին հաղորդագրություն',
      error
    );
  }

  public showConfirmationModal(id: string): void {
    const modal = this.modalService.show(ConfirmationModalComponent);
    (<ConfirmationModalComponent>modal.content).showConfirmationModal(
      'Հեռացնել գրառումը',
      'Դուք իրոք ցանկանում եք հեռացնել ' + id + ' համարի գրառումը'
    );

    (<ConfirmationModalComponent>modal.content).onClose.subscribe(result => {
      if (result === true) {
        this.remove(id);
      } else if (result === false) {
        // when pressed No
      } else {
        // When closing the modal without no or yes
      }
    });
  }
}
