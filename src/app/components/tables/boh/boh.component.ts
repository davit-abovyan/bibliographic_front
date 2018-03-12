import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {DomSanitizer} from '@angular/platform-browser';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {ConfirmationModalComponent} from '../../templates/confirmation-modal/confirmation-modal.component';
import {BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-boh',
  templateUrl: './boh.component.html',
  styleUrls: ['./boh.component.css']
})
export class BohComponent implements OnInit {
  public items: Array<any> = [];
  public isLoaded = false;

  public newBoh: string;

  // @ViewChild(ConfirmationModalComponent)
  // private confirmationModal: ConfirmationModalComponent;

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
    this.apiService.addBoh(JSON.parse('{"name": "' + this.newBoh + '"}')).subscribe(objects => {
      this.newBoh = '';
      this.getBoh();
    });
  }

  removeBoh(id: string): void {
    this.showConfirmationModal(id);
  }

  remove(id: string): void {
    this.apiService.removeBoh(id).subscribe(
      () => {
        this.getBoh();
        },
      (err: HttpErrorResponse) => {
        console.log(err.status + ' ' + err.error);
      }
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
