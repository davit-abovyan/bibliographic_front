import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from '../../../services/api.service';
import * as _ from 'lodash';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {ConfirmationModalComponent} from '../../templates/confirmation-modal/confirmation-modal.component';
import {BsModalService} from 'ngx-bootstrap';
import {Operator} from '../../../entity/operator';
import {NotificationModalComponent} from '../../templates/notification-modal/notification-modal.component';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {
  public items: Array<Operator> = [];
  public isLoaded = false;
  public editRowId = -1;

  public newOperator: string;
  public editedOperator: string;
  public isAdmin: boolean;

  constructor(private apiService: ApiService, private modalService: BsModalService) {
  }

  ngOnInit() {
    this.getObject();
  }

  getObject(): void {
    this.apiService.getOperator().subscribe(objects => {
      this.items = this.apiService.selectableOperator(objects);
      this.isLoaded = true;
    });
  }

  addObject(): void {
    const body = '{"name": "' + this.newOperator + '"}';
    this.apiService.addOperator(JSON.parse(body))
      .subscribe(() => {
        this.newOperator = '';
        this.getObject();
      });
  }

  copyObject(id: number): void {
    const object: Operator[] = _.filter(this.items, {'id': id});
    const body = '{"name": "' + object[0].name + ' (copy)"}';
    this.apiService.addOperator(JSON.parse(body))
      .subscribe(() => {
          this.getObject();
        }, (err: HttpErrorResponse) => {
          if (err.status === 409) {
            this.showNotification(err.status, err.error);
          }
        }
      );
  }

  editObject(id: number): void {
    this.editRowId = id;
  }

  removeObject(text: string): void {
    this.showConfirmationModal(text);
  }

  editName(id: number): void {
    if (this.editedOperator === undefined) {
      this.editRowId = -1;
    } else {
      const body = '{"id":"' + id + '", "name": "' + this.editedOperator + '", "reviewer": ' + this.isAdmin + '}';
      this.apiService.editOperator(JSON.parse(body))
        .subscribe(() => {
          this.editedOperator = '';
          this.editRowId = -1;
          this.getObject();
        });
    }
  }

  editIsAdmin(id: number): void {
      const body = '{"id":"' + id + '", "reviewer": ' + this.isAdmin + '}';
      this.apiService.editOperator(JSON.parse(body))
        .subscribe(() => {

        });
  }


  remove(id: string): void {
    this.apiService.removeOperatorAPI(id)
      .subscribe(() => {
          this.getObject();
        }
      );
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
      'Ցանկանում եք հեռացնել ' + id + ' գրառումը?'
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
