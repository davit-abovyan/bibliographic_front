import {Selectable} from './selectable';

export class Operator extends Selectable {

  constructor(id: number, public name: string, public isReviewer: boolean) {
    super(id, name + (isReviewer ? ' (Reviewer)' : ''));
  }
}
