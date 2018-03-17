import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as _ from 'lodash';
import {Operator} from '../entity/operator';
import {HttpEvent} from '@angular/common/http/src/response';
import {Person} from '../entity/person';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json;charset=UTF-8'})
};

@Injectable()
export class ApiService {

  private host = 'http://63.142.252.60:8080/api/v1.0/';
  private search = '/search/';

  private boh = 'boh';
  private operator = 'operator';
  private person = 'person';
  private scienceField = 'sciencefield';
  private journal = 'journal';
  private statistics = 'statistics';

  private some: any;

  constructor(private http: HttpClient) {
  }

  getBoh(): Observable<Array<any>> {
    return this.getObject(this.boh);
  }

  getOperator(): Observable<Array<any>> {
    return this.getObject(this.operator);
  }

  getPerson(): Observable<Array<any>> {
    return this.getObject(this.person);
  }

  getScienceField(): Observable<Array<any>> {
    return this.getObject(this.scienceField);
  }

  getJournal(): Observable<Array<any>> {
    return this.getObject(this.journal);
  }

  getStatistics(): Observable<Array<any>> {
    return this.getObject(this.statistics);
  }

  addBoh(json: JSON): Observable<HttpEvent<Object>> {
    return this.addObject(json, this.boh);
  }

  addOperator(json: JSON): Observable<HttpEvent<Object>> {
    return this.addObject(json, this.operator);
  }

  addPerson(json: JSON): Observable<HttpEvent<Object>> {
    return this.addObject(json, this.person);
  }

  editBoh(json: JSON): Observable<HttpEvent<Object>> {
    return this.editObject(json, this.boh);
  }

  editOperator(json: JSON): Observable<HttpEvent<Object>> {
    return this.editObject(json, this.operator);
  }

  editPerson(json: JSON): Observable<HttpEvent<Object>> {
    return this.editObject(json, this.person);
  }

  removeBoh(id: string): Observable<HttpEvent<Object>> {
    this.some = this.removeObject(id, this.boh);
    return this.some;
  }

  removeOperatorAPI(id: string): Observable<HttpEvent<Object>> {
    this.some = this.removeObject(id, this.operator);
    return this.some;
  }

  removePerson(id: string): Observable<HttpEvent<Object>> {
    this.some = this.removeObject(id, this.person);
    return this.some;
  }

  removeObject(id: string, url: string): Observable<HttpEvent<Object>> {
    return this.http.delete<any>(this.host + url + '/' + id, httpOptions);
  }

  private getObject(url: string): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.host + url + this.search, httpOptions);
  }

  private addObject(json: JSON, url: string): Observable<HttpEvent<Object>> {
    return this.http.post<any>(this.host + url + '/', json , httpOptions);
  }

  private editObject(json: JSON, url: string): Observable<HttpEvent<Object>> {
    return this.http.put<any>(this.host + url + '/', json , httpOptions);
  }

  selectableOperator(array: string[]): Array<any> {
    return _.map(array, (element: Operator) => new Operator(element.id, element.name, element.reviewer));
  }
  selectablePerson(array: string[]): Array<any> {
    return _.map(array, (element: Person) =>
      new Person({
          id: element.id,
          nameInitialArm: element.nameInitialArm,
          nameInitialRus: element.nameInitialRus,
          nameInitialEng: element.nameInitialEng,
          nameFinalArm: element.nameFinalArm,
          nameFinalRus: element.nameFinalRus,
          nameFinalEng: element.nameFinalEng,
          inReviewState: element.inReviewState
        }));
  }

}
