import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../../services/api.service';
import {NotificationModalComponent} from '../../../templates/notification-modal/notification-modal.component';
import {HttpErrorResponse} from '@angular/common/http';
import {ConfirmationModalComponent} from '../../../templates/confirmation-modal/confirmation-modal.component';
import {BsModalService} from 'ngx-bootstrap';
import * as _ from 'lodash';
import {Journal} from '../../../../entity/journal';

@Component({
  selector: 'app-new-journal',
  templateUrl: './new-journal.component.html',
  styleUrls: ['./new-journal.component.css']
})
export class NewJournalComponent implements OnInit {

  public items: Array<Journal> = [];
  public isLoaded = false;
  public editRowId = -1;

  public newJournal: Journal = new Journal({});
  public editedJournal: Journal = new Journal({});

  constructor(private apiService: ApiService, private modalService: BsModalService) {
  }

  ngOnInit() {
    this.getJournal();
  }

  setScienceFieldId(id: number): void {
    this.newJournal.scienceFieldId = id;
  }
  setOperatorId(id: number): void {
    this.newJournal.operatorId = id;
  }
  setEditorId(id: number): void {
    this.newJournal.editor = id;
  }

  getJournal(): void {
    this.apiService.getJournal().subscribe(objects => {
      this.items = this.apiService.selectableJournal(objects);
      this.isLoaded = true;
    });
  }

  addJournal(): void {
    const body = `{
        \"id\": "${this.newJournal.id}",
        \"code\": "${this.newJournal.code}",
        \"operatorId\": "${this.newJournal.operatorId}",
        \"nameArm\": "${this.newJournal.nameArm}",
        \"nameRus\": "${this.newJournal.nameRus}",
        \"nameEng\": "${this.newJournal.nameEng}",
        \"fullNameArm\": "${this.newJournal.fullNameArm}",
        \"fullNameRus\": "${this.newJournal.fullNameRus}",
        \"fullNameEng\": "${this.newJournal.fullNameEng}",
        \"ISSNPrint\": "${this.newJournal.ISSNPrint}",
        \"ISBN\": "${this.newJournal.ISBN}",
        \"founderArm\": "${this.newJournal.founderArm}",
        \"publisherArm\": "${this.newJournal.publisherArm}",
        \"publisherRus\": "${this.newJournal.publisherRus}",
        \"publisherEng\": "${this.newJournal.publisherEng}",
        \"phone\": "${this.newJournal.phone}",
        \"fax\": "${this.newJournal.fax}",
        \"email\": "${this.newJournal.email}",
        \"website\": "${this.newJournal.website}",
        \"country\": "${this.newJournal.country}",
        \"city\": "${this.newJournal.city}",
        \"address\": "${this.newJournal.address}",
        \"frequency\": "${this.newJournal.frequency}",
        \"language\": "${this.newJournal.language}",
        \"journalCategory\": "${this.newJournal.journalCategory}",
        \"reviewed\": "${this.newJournal.reviewed}",
        \"inProgress\": "${this.newJournal.inProgress}",
        \"startYear\": "${this.newJournal.startYear}",
        \"editor\": "${this.newJournal.editor}",
        \"descriptionArm\": "${this.newJournal.descriptionArm}",
        \"descriptionRus\": "${this.newJournal.descriptionRus}",
        \"descriptionEng\": "${this.newJournal.descriptionEng}",
        \"scienceFieldId\": "${this.newJournal.scienceFieldId}",
        \"cover\": "${this.newJournal.cover}",
        \"type\": "${this.newJournal.type}",
        \"indexedLibraries\": "${this.newJournal.indexedLibraries}"
        }`;
    this.apiService.addJournal(JSON.parse(body))
      .subscribe(() => {
        this.showSuccessMessage(this.newJournal.code);
        this.newJournal = new Journal({});
        this.getJournal();
      }, (err: HttpErrorResponse) => {
        if (err.status === 409) {
          this.showNotification(err.status, err.error);
        }
        console.log(err.status + ' ' + err.error);
      });
  }

  copyJournal(id: number): void {
    const object: Journal[] = _.filter(this.items, {'id': id});
    const body = `{
      \"id\": ${id},
      \"code\": "XXX-000",
      \"operatorId\": "${object[0].operatorId}",
      \"nameArm\": "${object[0].nameArm}",
      \"nameRus\": "${object[0].nameRus}",
      \"nameEng\": "${object[0].nameEng}",
      \"fullNameArm\": "${object[0].fullNameArm}",
      \"fullNameRus\": "${object[0].fullNameRus}",
      \"fullNameEng\": "${object[0].fullNameEng}",
      \"ISSNPrint\": "${object[0].ISSNPrint}",
      \"ISBN\": "${object[0].ISBN}",
      \"founderArm\": "${object[0].founderArm}",
      \"publisherArm\": "${object[0].publisherArm}",
      \"publisherRus\": "${object[0].publisherRus}",
      \"publisherEng\": "${object[0].publisherEng}",
      \"phone\": "${object[0].phone}",
      \"fax\": "${object[0].fax}",
      \"email\": "${object[0].email}",
      \"website\": "${object[0].website}",
      \"country\": "${object[0].country}",
      \"city\": "${object[0].city}",
      \"address\": "${object[0].address}",
      \"frequency\": "${object[0].frequency}",
      \"language\": "${object[0].language}",
      \"journalCategory\": "${object[0].journalCategory}",
      \"reviewed\": "${object[0].reviewed}",
      \"inProgress\": "${object[0].inProgress}",
      \"startYear\": "${object[0].startYear}",
      \"editor\": "${object[0].editor}",
      \"descriptionArm\": "${object[0].descriptionArm}",
      \"descriptionRus\": "${object[0].descriptionRus}",
      \"descriptionEng\": "${object[0].descriptionEng}",
      \"scienceFieldId\": "${object[0].scienceFieldId}",
      \"cover\": "${object[0].cover}",
      \"type\": "${object[0].type}",
      \"indexedLibraries\": "${object[0].indexedLibraries}"
      }`;
    this.apiService.addJournal(JSON.parse(body))
      .subscribe(() => {
          this.newJournal = new Journal({});
          this.showSuccessMessage(id);
          this.getJournal();
        }, (err: HttpErrorResponse) => {
          if (err.status === 409) {
            this.showNotification(err.status, err.error);
          }
          console.log(err.status + ' ' + err.error);
        }
      );
  }

  editJournal(id: number): void {
    this.editRowId = id;
    const object: Journal[] = _.filter(this.items, {'id': id});
    this.editedJournal = new Journal({
      'id': id,
      'code': object[0].code,
      'operatorId': object[0].operatorId,
      'nameArm': object[0].nameArm,
      'nameRus': object[0].nameRus,
      'nameEng': object[0].nameEng,
      'fullNameArm': object[0].fullNameArm,
      'fullNameRus': object[0].fullNameRus,
      'fullNameEng': object[0].fullNameEng,
      'ISSNPrint': object[0].ISSNPrint,
      'ISBN': object[0].ISBN,
      'founderArm': object[0].founderArm,
      'publisherArm': object[0].publisherArm,
      'publisherRus': object[0].publisherRus,
      'publisherEng': object[0].publisherEng,
      'phone': object[0].phone,
      'fax': object[0].fax,
      'email': object[0].email,
      'website': object[0].website,
      'country': object[0].country,
      'city': object[0].city,
      'address': object[0].address,
      'frequency': object[0].frequency,
      'language': object[0].language,
      'journalCategory': object[0].journalCategory,
      'reviewed': object[0].reviewed,
      'inProgress': object[0].inProgress,
      'startYear': object[0].startYear,
      'editor': object[0].editor,
      'descriptionArm': object[0].descriptionArm,
      'descriptionRus': object[0].descriptionRus,
      'descriptionEng': object[0].descriptionEng,
      'scienceFieldId': object[0].scienceFieldId,
      'cover': object[0].cover,
      'type': object[0].type,
      'indexedLibraries': object[0].indexedLibraries
    });
  }

  removeJournal(id: string, text: string): void {
    this.showConfirmationModal(id, text);
  }

  edit(id: number): void {
    if (false) {
    } else {
      const body = `{
        \"id\": ${id}
        ${this.editedJournal.code === '' ? '' : `,\"code\": "${this.editedJournal.code}"`}
        ${this.editedJournal.operatorId === -1 ? '' : `,\"operatorId\": "${this.editedJournal.operatorId}"`}
        ${this.editedJournal.nameArm === '' ? '' : `,\"nameArm\": "${this.editedJournal.nameArm}"`}
        ${this.editedJournal.nameRus === '' ? '' : `,\"nameRus\": "${this.editedJournal.nameRus}"`}
        ${this.editedJournal.nameEng === '' ? '' : `,\"nameEng\": "${this.editedJournal.nameEng}"`}
        ${this.editedJournal.fullNameArm === '' ? '' : `,\"fullNameArm\": "${this.editedJournal.fullNameArm}"`}
        ${this.editedJournal.fullNameRus === '' ? '' : `,\"fullNameRus\": "${this.editedJournal.fullNameRus}"`}
        ${this.editedJournal.fullNameEng === '' ? '' : `,\"fullNameEng\": "${this.editedJournal.fullNameEng}"`}
        ${this.editedJournal.ISSNPrint === '' ? '' : `,\"ISSNPrint\": "${this.editedJournal.ISSNPrint}"`}
        ${this.editedJournal.ISBN === '' ? '' : `,\"ISBN\": "${this.editedJournal.ISBN}"`}
        ${this.editedJournal.founderArm === '' ? '' : `,\"founderArm\": "${this.editedJournal.founderArm}"`}
        ${this.editedJournal.publisherArm === '' ? '' : `,\"publisherArm\": "${this.editedJournal.publisherArm}"`}
        ${this.editedJournal.publisherRus === '' ? '' : `,\"publisherRus\": "${this.editedJournal.publisherRus}"`}
        ${this.editedJournal.publisherEng === '' ? '' : `,\"publisherEng\": "${this.editedJournal.publisherEng}"`}
        ${this.editedJournal.phone === '' ? '' : `,\"phone\": "${this.editedJournal.phone}"`}
        ${this.editedJournal.fax === '' ? '' : `,\"fax\": "${this.editedJournal.fax}"`}
        ${this.editedJournal.email === '' ? '' : `,\"email\": "${this.editedJournal.email}"`}
        ${this.editedJournal.website === '' ? '' : `,\"website\": "${this.editedJournal.website}"`}
        ${this.editedJournal.country === '' ? '' : `,\"country\": "${this.editedJournal.country}"`}
        ${this.editedJournal.city === '' ? '' : `,\"city\": "${this.editedJournal.city}"`}
        ${this.editedJournal.address === '' ? '' : `,\"address\": "${this.editedJournal.address}"`}
        ${this.editedJournal.frequency === -1 ? '' : `,\"frequency\": "${this.editedJournal.frequency}"`}
        ${this.editedJournal.language === -1 ? '' : `,\"language\": "${this.editedJournal.language}"`}
        ${this.editedJournal.journalCategory === '' ? '' : `,\"journalCategory\": "${this.editedJournal.journalCategory}"`}
        ${`,\"reviewed\": "${this.editedJournal.reviewed}"`}
        ${`,\"inProgress\": "${this.editedJournal.inProgress}"`}
        ${this.editedJournal.startYear === '' ? '' : `,\"startYear\": "${this.editedJournal.startYear}"`}
        ${this.editedJournal.editor === -1 ? '' : `,\"editor\": "${this.editedJournal.editor}"`}
        ${this.editedJournal.descriptionArm === '' ? '' : `,\"descriptionArm\": "${this.editedJournal.descriptionArm}"`}
        ${this.editedJournal.descriptionRus === '' ? '' : `,\"descriptionRus\": "${this.editedJournal.descriptionRus}"`}
        ${this.editedJournal.descriptionEng === '' ? '' : `,\"descriptionEng\": "${this.editedJournal.descriptionEng}"`}
        ${this.editedJournal.scienceFieldId === -1 ? '' : `,\"scienceFieldId\": "${this.editedJournal.scienceFieldId}"`}
        ${this.editedJournal.cover === '' ? '' : `,\"cover\": "${this.editedJournal.cover}"`}
        ${`,\"type\": "${this.editedJournal.type}"`}
        ${this.editedJournal.indexedLibraries === -1 ? '' : `,\"indexedLibraries\": "${this.editedJournal.indexedLibraries}"`}
        }`;
      this.apiService.editJournal(JSON.parse(body))
        .subscribe(() => {
          this.editedJournal = new Journal({});
          this.editRowId = -1;
          this.getJournal();
        });
    }
  }

  cancleEdit() {
    this.editRowId = -1;
  }

  remove(id: string): void {
    this.apiService.removeJournal(id)
      .subscribe(() => {
          this.getJournal();
        }
      );
  }

  public showSuccessMessage(code: any) {
    const modal = this.modalService.show(NotificationModalComponent);
    (<NotificationModalComponent>modal.content).showNotificationModal(
      'Գրառման հաստատում',
       code + ' գրառւմը հաջողությամբ գրանցվեց'
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
