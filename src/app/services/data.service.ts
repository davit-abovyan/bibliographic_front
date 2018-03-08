import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  menuItems = [
    {
      'menu': 'info',
      'rows': [
        {'key': 'operator', 'arm': 'Օպերատոր', 'size': 'XS'},
        {'key': 'person', 'arm': 'Անձ', 'size': 'S'},
        {'key': 'science-field', 'arm': 'Գիտության ոլորտ', 'size': 'M'},
        {'key': 'boh', 'arm': 'ԲՈՀ', 'size': 'L'},
        {'key': 'statistics', 'arm': 'Վիճակագրություն', 'size': 'XL'},
        {'key': 'journal', 'arm': 'Ամսագիր', 'size': 'XXL'}
      ],
      'arm': 'Տեղեկատու'
    },
    {
      'menu': 'new',
      'rows': [
        {'key': 'issue', 'arm': 'Թողարկում'}
      ],
      'arm': 'Նոր գրառում'
    },
    {
      'menu': 'admin',
      'rows': [
        {'key': 'theme', 'arm': 'Գունավորում'}
      ],
      'arm': 'Ադմինիստրատորի գործիքներ'
    }
  ];

  constructor() { }

}
