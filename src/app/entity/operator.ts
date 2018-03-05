import {Selectable} from './selectable';

export class Operator extends Selectable {

  constructor(id: number, public name: string, public reviewer: boolean) {
    super(id, name + (reviewer ? ' (Reviewer)' : ''));
  }
}
