import { AfterViewInit, Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import {ConfigService} from './services/config.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'DBMS for bibliographic data';
  state = [];
  loggedIn = Cookie.get('auth') != null;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {

  }

  onSelect(page: string): void {
    this.state.push(page);
  }
}
