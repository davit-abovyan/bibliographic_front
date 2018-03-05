import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as _ from 'lodash';
import {Operator} from '../entity/operator';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json;charset=UTF-8'})
};

@Injectable()
export class ApiService {

  private operatorUrl = 'http://63.142.252.60:8080/api/v1.0/operator/search/';

  constructor(private http: HttpClient) {
  }

  getOperator(): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.operatorUrl, httpOptions);
  }

  selectableOperator(array: string[]): Array<any> {
    return _.map(array, (element: Operator) => new Operator(element.id, element.name, element.reviewer));
  }


}
