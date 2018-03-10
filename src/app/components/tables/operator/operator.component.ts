import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../services/api.service';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {
  public items: Array<any> = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getOperator();
  }

  getOperator(): void {
    this.apiService.getOperator().subscribe(operators => {
      this.items = this.apiService.selectableOperator(operators);
      console.log(operators);
    });
  }
}
