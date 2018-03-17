import {Selectable} from './selectable';

export class Person extends Selectable {

  public nameInitialArm: string;
  public nameInitialRus: string;
  public nameInitialEng: string;
  public nameFinalArm: string;
  public nameFinalRus: string;
  public nameFinalEng: string;
  public inReviewState: boolean;

  constructor(
    {
      id = -1,
      nameInitialArm = '',
      nameInitialRus = '',
      nameInitialEng = '',
      nameFinalArm = '',
      nameFinalRus = '',
      nameFinalEng = '',
      inReviewState = false
    }: {
      id?: number,
      nameInitialArm?: string,
      nameInitialRus?: string,
      nameInitialEng?: string,
      nameFinalArm?: string,
      nameFinalRus?: string,
      nameFinalEng?: string,
      inReviewState?: boolean
    }) {
    super(id, (nameFinalArm === '' ? nameInitialArm : nameFinalArm));
    this.nameInitialArm = nameInitialArm;
    this.nameInitialRus = nameInitialRus;
    this.nameInitialEng = nameInitialEng;
    this.nameFinalArm = nameFinalArm;
    this.nameFinalRus = nameFinalRus;
    this.nameFinalEng = nameFinalEng;
    this.inReviewState = inReviewState;
  }

}
