import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {TabsModule, ButtonsModule, ModalModule} from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularDraggableModule } from 'angular2-draggable';

import { AppComponent } from './app.component';
import { TypeaheadComponent } from './components/typeahead/typeahead.component';
import { ApiService } from './services/api.service';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxSelectModule } from 'ngx-select-ex';
import { TopNemuComponent } from './components/top-nemu/top-nemu.component';
import { BohComponent } from './components/tables/boh/boh.component';
import { JournalComponent } from './components/tables/journal/journal.component';
import { PersonComponent } from './components/tables/person/person.component';
import { OperatorComponent } from './components/tables/operator/operator.component';
import { ScienceFieldComponent } from './components/tables/science-field/science-field.component';
import { StatisticsComponent } from './components/tables/statistics/statistics.component';
import { WorkAreaComponent } from './components/work-area/work-area.component';
import { LogoComponent } from './components/logo/logo.component';
import { ControllPanelComponent } from './components/controll-panel/controll-panel.component';
import {ConfirmationModalComponent} from './components/templates/confirmation-modal/confirmation-modal.component';
import { NotificationModalComponent } from './components/templates/notification-modal/notification-modal.component';
import {ConfigService} from './services/config.service';
import { NewJournalComponent } from './components/tables/journal/new-journal/new-journal.component';
import { LogInComponent } from './components/log-in/log-in.component';

@NgModule({
  declarations: [
    AppComponent,
    TypeaheadComponent,
    TopNemuComponent,
    BohComponent,
    JournalComponent,
    PersonComponent,
    OperatorComponent,
    ScienceFieldComponent,
    StatisticsComponent,
    WorkAreaComponent,
    LogoComponent,
    ControllPanelComponent,
    ConfirmationModalComponent,
    NotificationModalComponent,
    NewJournalComponent,
    LogInComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSelectModule,
    NgbModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    AngularDraggableModule,
    ModalModule.forRoot()
  ],
  providers: [
    ApiService,
    DataService,
    ConfigService
  ],
  entryComponents: [
    ConfirmationModalComponent,
    NotificationModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
