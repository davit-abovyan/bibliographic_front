import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {BsModalService, TabsModule} from 'ngx-bootstrap';
import {HttpErrorResponse} from '@angular/common/http';
import {ConfirmationModalComponent} from '../../templates/confirmation-modal/confirmation-modal.component';
import * as _ from 'lodash';
import {NotificationModalComponent} from '../../templates/notification-modal/notification-modal.component';
import {Person} from '../../../entity/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  public items: Array<Person> = [];
  public isLoaded = false;
  public editRowId = -1;

  public newPerson: Person = new Person({});
  public editedPerson: Person = new Person({});

  constructor(private apiService: ApiService, private modalService: BsModalService) {
  }

  ngOnInit() {
    this.getPerson();
  }

  getPerson(): void {
    this.apiService.getPerson().subscribe(objects => {
      this.items = this.apiService.selectablePerson(objects);
      this.isLoaded = true;
    });
  }

  addPerson(): void {
    const body = `{
        \"nameInitialArm\": "${this.newPerson.nameInitialArm}",
        \"nameInitialRus\": "${this.newPerson.nameInitialRus}",
        \"nameInitialEng\": "${this.newPerson.nameInitialEng}",
        \"nameFinalArm\": "${this.newPerson.nameFinalArm}",
        \"nameFinalRus\": "${this.newPerson.nameFinalRus}",
        \"nameFinalEng\": "${this.newPerson.nameFinalEng}",
        \"inReviewState\": ${this.newPerson.inReviewState}
        }`;
    this.apiService.addPerson(JSON.parse(body))
      .subscribe(() => {
        this.newPerson = new Person({});
        this.getPerson();
      });
  }

  copyPerson(id: number): void {
    const object: Person[] = _.filter(this.items, {'id': id});
    const body = `{
      \"id\": ${id},
      \"nameInitialArm\": \"${object[0].nameInitialArm} (copy)\",
      \"nameInitialRus\": \"${object[0].nameInitialRus} (copy)\",
      \"nameInitialEng\": \"${object[0].nameInitialEng} (copy)\",
      \"nameFinalArm\": \"${object[0].nameFinalArm} (copy)\",
      \"nameFinalRus\": \"${object[0].nameFinalRus} (copy)\",
      \"nameFinalEng\": \"${object[0].nameFinalEng} (copy)\",
      \"reviewState\": ${object[0].inReviewState}
      }`;
    console.log(body);
    this.apiService.addPerson(JSON.parse(body))
      .subscribe(() => {
          this.getPerson();
        }, (err: HttpErrorResponse) => {
          if (err.status === 409) {
            this.showNotification(err.status, err.error);
          }
          console.log(err.status + ' ' + err.error);
        }
      );
  }

  editPerson(id: number): void {
    this.editRowId = id;
    const object: Person[] = _.filter(this.items, {'id': id});
    this.editedPerson = new Person({
      'nameInitialArm': object[0].nameInitialArm,
      'nameInitialRus': object[0].nameInitialRus,
      'nameInitialEng': object[0].nameInitialEng,
      'nameFinalArm': object[0].nameFinalArm,
      'nameFinalRus': object[0].nameFinalRus,
      'nameFinalEng': object[0].nameFinalEng,
      'inReviewState': object[0].inReviewState
      });
  }

  removePerson(id: string, text: string): void {
    this.showConfirmationModal(id, text);
  }

  edit(id: number): void {
    if (false) {
    } else {
      const body = `{
        \"id\": ${id}
        ${this.editedPerson.nameInitialArm === '' ? '' : `,\"nameInitialArm\": "${this.editedPerson.nameInitialArm}"`}
        ${this.editedPerson.nameInitialRus === '' ? '' : `,\"nameInitialRus\": "${this.editedPerson.nameInitialRus}"`}
        ${this.editedPerson.nameInitialEng === '' ? '' : `,\"nameInitialEng\": "${this.editedPerson.nameInitialEng}"`}
        ${this.editedPerson.nameFinalArm === '' ? '' : `,\"nameFinalArm\": "${this.editedPerson.nameFinalArm}"`}
        ${this.editedPerson.nameFinalRus === '' ? '' : `,\"nameFinalRus\": "${this.editedPerson.nameFinalRus}"`}
        ${this.editedPerson.nameFinalEng === '' ? '' : `,\"nameFinalEng\": "${this.editedPerson.nameFinalEng}"`}
        ${this.editedPerson.inReviewState === false ? '' : `,\"inReviewState\": ${this.editedPerson.inReviewState}`}
        }`;
      this.apiService.editPerson(JSON.parse(body))
        .subscribe(() => {
          this.editedPerson = new Person({});
          this.editRowId = -1;
          this.getPerson();
        });
    }
  }

  cancleEdit() {
    this.editRowId = -1;
  }

  remove(id: string): void {
    this.apiService.removePerson(id)
      .subscribe(() => {
          this.getPerson();
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
