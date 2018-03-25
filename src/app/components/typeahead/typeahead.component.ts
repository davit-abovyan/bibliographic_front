import {Component, OnInit, OnDestroy, ViewEncapsulation, Input, EventEmitter, Output} from '@angular/core';
import { ApiService } from '../../services/api.service';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.less'],
  encapsulation: ViewEncapsulation.None  // Enable dynamic HTML styles
})

export class TypeaheadComponent implements OnInit, OnDestroy {

  public items: Array<any> = [];
  public control_1 = new FormControl();
  public ngxValue;
  public ngxDisabled = false;

  @Input() public objectBase: string;
  @Output() notify: EventEmitter<number> = new EventEmitter<number>();
  constructor(private apiService: ApiService, public sanitizer: DomSanitizer) {
  }

  style(data: string): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(data);
  }


  selectElement(): void {
    this.notify.emit(this.ngxValue);
  }

  ngOnInit() {
    this.setObject(this.objectBase.substr(1, this.objectBase.length - 2));
  }

  setObject(type: string): void {
    if (type === this.apiService.operator) {this.getOperator(); }
    if (type === this.apiService.person) {this.getPerson(); }
    if (type === this.apiService.scienceField) {this.getScienceField(); }
  }

  ngOnDestroy(): void {
  }

  getOperator(): void {
    this.apiService.getOperator().subscribe(entities => {
      this.items = this.apiService.selectableOperator(entities);
    });
  }

  getPerson(): void {
    this.apiService.getPerson().subscribe(entities => {
      this.items = this.apiService.selectablePerson(entities);
    });
  }

  getScienceField(): void {
    this.apiService.getScienceField().subscribe(entities => {
      this.items = this.apiService.selectableScienceField(entities);
    });
  }

  public inputTyped(source: string, text: string) {
    console.log('SingleDemoComponent.inputTyped', source, text);
  }

  public doFocus() {
    console.log('SingleDemoComponent.doFocus');
  }

  public doBlur() {
    console.log('SingleDemoComponent.doBlur');
  }

  public doOpen() {
    console.log('SingleDemoComponent.doOpen');
  }

  public doClose() {
    console.log('SingleDemoComponent.doClose');
  }

  public doSelect(value: any) {
    console.log('SingleDemoComponent.doSelect', value);
  }

  public doRemove(value: any) {
    console.log('SingleDemoComponent.doRemove', value);
  }

}
