import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ApiService } from '../../services/api.service';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.css'],
  encapsulation: ViewEncapsulation.None  // Enable dynamic HTML styles
})

export class TypeaheadComponent implements OnInit, OnDestroy {

  public items: Array<any> = [];
  public control_1 = new FormControl();
  public ngxValue;

  public ngxDisabled = false;

  constructor(private apiService: ApiService, public sanitizer: DomSanitizer) {
  }

  style(data: string): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(data);
  }

  ngOnInit() {
    this.getOperator();
  }

  ngOnDestroy(): void {
  }

  getOperator(): void {
    this.apiService.getOperator().subscribe(operators => {
      this.items = this.apiService.selectableOperator(operators);
      console.log(operators);
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
