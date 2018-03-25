import {Selectable} from './selectable';

export class ScienceField extends Selectable {

  public nameArm: string;
  public nameRus: string;
  public nameEng: string;

  constructor(
    {
      id = -1,
      nameArm = '',
      nameRus = '',
      nameEng = ''
    }: {
      id?: number,
      nameArm?: string,
      nameRus?: string,
      nameEng?: string
    }) {
    super(id, nameArm);
    this.nameArm = nameArm;
    this.nameRus = nameRus;
    this.nameEng = nameEng;
  }
}
