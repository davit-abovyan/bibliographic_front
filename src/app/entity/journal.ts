import {Selectable} from './selectable';
import index from '@angular/cli/lib/cli';

export class Journal extends Selectable {

  public id: number;
  public code: string;
  public operatorId: number;
  public nameArm: string;
  public nameRus: string;
  public nameEng: string;
  public fullNameArm: string;
  public fullNameRus: string;
  public fullNameEng: string;
  public ISSNPrint: string;
  public ISBN: string;
  public founderArm: string;
  public publisherArm: string;
  public publisherRus: string;
  public publisherEng: string;
  public phone: string;
  public fax: string;
  public email: string;
  public website: string;
  public country: string;
  public city: string;
  public address: string;
  public frequency: number;
  public language: number;
  public journalCategory: string;
  public reviewed: boolean;
  public inProgress: boolean;
  public startYear: string;
  public editor: number;
  public descriptionArm: string;
  public descriptionRus: string;
  public descriptionEng: string;
  public scienceFieldId: number;
  public cover: string;
  public type: boolean;
  public indexedLibraries: number;

  constructor(
    {
      id = -1,
      code = '',
      operatorId = -1,
      nameArm = '',
      nameRus = '',
      nameEng = '',
      fullNameArm = '',
      fullNameRus = '',
      fullNameEng = '',
      ISSNPrint = '',
      ISBN = '',
      founderArm = '',
      publisherArm = '',
      publisherRus = '',
      publisherEng = '',
      phone = '',
      fax = '',
      email = '',
      website = '',
      country = '',
      city = '',
      address = '',
      frequency = -1,
      language = -1,
      journalCategory = '',
      reviewed = false,
      inProgress = false,
      startYear = '',
      editor = -1,
      descriptionArm = '',
      descriptionRus = '',
      descriptionEng = '',
      scienceFieldId = -1,
      cover = '',
      type = false,
      indexedLibraries = -1
    }: {
      id?: number,
      code?: string,
      operatorId?: number,
      nameArm?: string,
      nameRus?: string,
      nameEng?: string,
      fullNameArm?: string,
      fullNameRus?: string,
      fullNameEng?: string,
      ISSNPrint?: string,
      ISBN?: string,
      founderArm?: string,
      publisherArm?: string,
      publisherRus?: string,
      publisherEng?: string,
      phone?: string,
      fax?: string,
      email?: string,
      website?: string,
      country?: string,
      city?: string,
      address?: string,
      frequency?: number,
      language?: number,
      journalCategory?: string,
      reviewed?: boolean,
      inProgress?: boolean,
      startYear?: string,
      editor?: number,
      descriptionArm?: string,
      descriptionRus?: string,
      descriptionEng?: string,
      scienceFieldId?: number,
      cover?: string,
      type?: boolean,
      indexedLibraries?: number
}) {
    super(id, code + ' - ' + nameArm);
    this.code = code;
    this.operatorId = operatorId;
    this.nameArm = nameArm;
    this.nameRus = nameRus;
    this.nameEng = nameEng;
    this.fullNameArm = fullNameArm;
    this.fullNameRus = fullNameRus;
    this.fullNameEng = fullNameEng;
    this.ISSNPrint = ISSNPrint;
    this.ISBN = ISBN;
    this.founderArm = founderArm;
    this.publisherArm = publisherArm;
    this.publisherRus = publisherRus;
    this.publisherEng = publisherEng;
    this.phone = phone;
    this.fax = fax;
    this.email = email;
    this.website = website;
    this.country = country;
    this.city = city;
    this.address = address;
    this.frequency = frequency;
    this.language = language;
    this.journalCategory = journalCategory;
    this.reviewed = reviewed;
    this.inProgress = inProgress;
    this.startYear = startYear;
    this.editor = editor;
    this.descriptionArm = descriptionArm;
    this.descriptionRus = descriptionRus;
    this.descriptionEng = descriptionEng;
    this.scienceFieldId = scienceFieldId;
    this.cover = cover;
    this.type = type;
    this.indexedLibraries = indexedLibraries;
  }
}
