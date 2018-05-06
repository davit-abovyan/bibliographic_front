import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HttpEvent} from '@angular/common/http/src/response';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  public user: string;
  public pass: string;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  public login(): void {
    const credentials = btoa(this.user + ':' + this.pass);
    this.authenticate(credentials)
      .subscribe(logged => {
          this.setCooke(logged, credentials);
        }
      );

  }

  private authenticate(credentials: string): Observable<boolean> {
    const httpOptions = {
      headers: new HttpHeaders({'Authorization': 'Basic ' + credentials})
    };
    return this.http.post<boolean>('http://localhost:8080/api/v1.0/login/' + credentials, {}, httpOptions);
  }

  private setCooke(logged: boolean, credentials: string) {
    if (logged === true) {
      Cookie.set('auth', credentials, 7);
      window.location.reload();
    }
  }
}
