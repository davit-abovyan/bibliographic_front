import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as _ from 'lodash';
import {HttpEvent} from '@angular/common/http/src/response';
import { Cookie } from 'ng2-cookies/ng2-cookies';

import {Operator} from '../entity/operator';
import {Person} from '../entity/person';
import {ScienceField} from '../entity/scienceField';
import {Journal} from '../entity/journal';

const httpOptions = {
  headers: new HttpHeaders()
    .append('Content-Type', 'application/json;charset=UTF-8')
    .append('Authorization', 'Basic ' + Cookie.get('auth'))
};


@Injectable()
export class ApiService {

  private host = 'http://localhost:8080/api/v1.0/';
  private search = '/search/';

  public boh = 'boh';
  public operator = 'operator';
  public person = 'person';
  public scienceField = 'sciencefield';
  public journal = 'journal';
  public statistics = 'statistics';

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

  addScienceField(json: JSON): Observable<HttpEvent<Object>> {
    return this.addObject(json, this.scienceField);
  }

  addJournal(json: JSON): Observable<HttpEvent<Object>> {
    return this.addObject(json, this.journal);
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

  editScienceField(json: JSON): Observable<HttpEvent<Object>> {
    return this.editObject(json, this.scienceField);
  }

  editJournal(json: JSON): Observable<HttpEvent<Object>> {
    return this.editObject(json, this.journal);
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

  removeScienceField(id: string): Observable<HttpEvent<Object>> {
    this.some = this.removeObject(id, this.scienceField);
    return this.some;
  }

  removeJournal(id: string): Observable<HttpEvent<Object>> {
    this.some = this.removeObject(id, this.journal);
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
  selectableScienceField(array: string[]): Array<any> {
    return _.map(array, (element: ScienceField) =>
      new ScienceField({
        id: element.id,
        nameArm: element.nameArm,
        nameRus: element.nameRus,
        nameEng: element.nameEng
      }));
  }
  selectableJournal(array: string[]): Array<any> {
    return _.map(array, (element: Journal) =>
      new Journal({
        id: element.id,
        code: element.code,
        operatorId: element.operatorId,
        nameArm: element.nameArm,
        nameRus: element.nameRus,
        nameEng: element.nameEng,
        fullNameArm: element.fullNameArm,
        fullNameRus: element.fullNameRus,
        fullNameEng: element.fullNameEng,
        ISSNPrint: element.ISSNPrint,
        ISBN: element.ISBN,
        founderArm: element.founderArm,
        publisherArm: element.publisherArm,
        publisherRus: element.publisherRus,
        publisherEng: element.publisherEng,
        phone: element.phone,
        fax: element.fax,
        email: element.email,
        website: element.website,
        country: element.country,
        city: element.city,
        address: element.address,
        frequency: element.frequency,
        language: element.language,
        journalCategory: element.journalCategory,
        reviewed: element.reviewed,
        inProgress: element.inProgress,
        startYear: element.startYear,
        editor: element.editor,
        descriptionArm: element.descriptionArm,
        descriptionRus: element.descriptionRus,
        descriptionEng: element.descriptionEng,
        scienceFieldId: element.scienceFieldId,
        cover: element.cover,
        type: element.type,
        indexedLibraries: element.indexedLibraries
      }));
  }
}
