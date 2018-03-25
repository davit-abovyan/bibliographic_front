import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {NotificationModalComponent} from '../../templates/notification-modal/notification-modal.component';
import {HttpErrorResponse} from '@angular/common/http';
import {ConfirmationModalComponent} from '../../templates/confirmation-modal/confirmation-modal.component';
import {BsModalService} from 'ngx-bootstrap';
import * as _ from 'lodash';
import {ScienceField} from '../../../entity/scienceField';

@Component({
  selector: 'app-science-field',
  templateUrl: './science-field.component.html',
  styleUrls: ['./science-field.component.css']
})
export class ScienceFieldComponent implements OnInit {

  public items: Array<ScienceField> = [];
  public isLoaded = false;
  public editRowId = -1;

  public newScienceField: ScienceField = new ScienceField({});
  public editedScienceField: ScienceField = new ScienceField({});

  constructor(private apiService: ApiService, private modalService: BsModalService) {
  }

  ngOnInit() {
    this.getScienceField();
  }

  getScienceField(): void {
    this.apiService.getScienceField().subscribe(objects => {
      this.items = this.apiService.selectableScienceField(objects);
      this.isLoaded = true;
    });
  }

  addScienceField(): void {
    const body = `{
        \"nameArm\": "${this.newScienceField.nameArm}",
        \"nameRus\": "${this.newScienceField.nameRus}",
        \"nameEng\": "${this.newScienceField.nameEng}"
        }`;
    this.apiService.addScienceField(JSON.parse(body))
      .subscribe(() => {
        this.newScienceField = new ScienceField({});
        this.getScienceField();
      });
  }

  copyScienceField(id: number): void {
    const object: ScienceField[] = _.filter(this.items, {'id': id});
    const body = `{
      \"id\": ${id},
      \"nameArm\": \"${object[0].nameArm} (copy)\",
      \"nameRus\": \"${object[0].nameRus} (copy)\",
      \"nameEng\": \"${object[0].nameEng} (copy)\"
      }`;
    console.log(body);
    this.apiService.addScienceField(JSON.parse(body))
      .subscribe(() => {
          this.getScienceField();
        }, (err: HttpErrorResponse) => {
          if (err.status === 409) {
            this.showNotification(err.status, err.error);
          }
          console.log(err.status + ' ' + err.error);
        }
      );
  }

  editScienceField(id: number): void {
    this.editRowId = id;
    const object: ScienceField[] = _.filter(this.items, {'id': id});
    this.editedScienceField = new ScienceField({
      'nameArm': object[0].nameArm,
      'nameRus': object[0].nameRus,
      'nameEng': object[0].nameEng
    });
  }

  removeScienceField(id: string, text: string): void {
    this.showConfirmationModal(id, text);
  }

  edit(id: number): void {
    if (false) {
    } else {
      const body = `{
        \"id\": ${id}
        ${this.editedScienceField.nameArm === '' ? '' : `,\"nameArm\": "${this.editedScienceField.nameArm}"`}
        ${this.editedScienceField.nameRus === '' ? '' : `,\"nameRus\": "${this.editedScienceField.nameRus}"`}
        ${this.editedScienceField.nameEng === '' ? '' : `,\"nameEng\": "${this.editedScienceField.nameEng}"`}
        }`;
      this.apiService.editScienceField(JSON.parse(body))
        .subscribe(() => {
          this.editedScienceField = new ScienceField({});
          this.editRowId = -1;
          this.getScienceField();
        });
    }
  }

  cancleEdit() {
    this.editRowId = -1;
  }

  remove(id: string): void {
    this.apiService.removeScienceField(id)
      .subscribe(() => {
          this.getScienceField();
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

  public showConfirmationModal(id: string, text: string): void {
    const modal = this.modalService.show(ConfirmationModalComponent);
    (<ConfirmationModalComponent>modal.content).showConfirmationModal(
      'Հեռացնել գրառումը',
      'Ցանկանում եք հեռացնել <span class="attention-text">' + text + '</span> գրառումը?'
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
