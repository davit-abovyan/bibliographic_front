import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { TabsModule, ButtonsModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TypeaheadComponent } from './components/typeahead/typeahead.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxSelectModule } from 'ngx-select-ex';
import { ObjectSelectConverterService } from './util/object-select-converter.service';
import { TopNemuComponent } from './components/top-nemu/top-nemu.component';
import { BohComponent } from './components/tables/boh/boh.component';
import { JournalComponent } from './components/tables/journal/journal.component';
import { PersonComponent } from './components/tables/person/person.component';
import { OperatorComponent } from './components/tables/operator/operator.component';
import { ScienceFieldComponent } from './components/tables/science-field/science-field.component';
import { StatisticsComponent } from './components/tables/statistics/statistics.component';
import { WorkAreaComponent } from './components/work-area/work-area.component';

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
    WorkAreaComponent
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
    ButtonsModule.forRoot()
  ],
  providers: [
    ApiService,
    ObjectSelectConverterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
