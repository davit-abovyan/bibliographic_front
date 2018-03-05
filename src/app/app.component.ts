import { AfterViewInit, Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'DBMS for bibliographic data';
  state = '';
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  onSelect(page: string): void {
    this.state = page;
  }
}
