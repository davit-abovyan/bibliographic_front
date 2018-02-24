import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { TabsModule, ButtonsModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TypeaheadComponent } from './components/typeahead/typeahead.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxSelectModule } from 'ngx-select-ex';
import { ObjectSelectConverterService } from './util/object-select-converter.service';

@NgModule({
  declarations: [
    AppComponent,
    TypeaheadComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSelectModule,
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
