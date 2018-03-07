import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  menuItems = [
    {
      'menu': 'info',
      'rows': [
        {'key': 'operator', 'arm': 'Օպերատոր'},
        {'key': 'person', 'arm': 'Անձ'},
        {'key': 'science-field', 'arm': 'Գիտության ոլորտ'},
        {'key': 'boh', 'arm': 'ԲՈՀ'},
        {'key': 'statistics', 'arm': 'Վիճակագրություն'},
        {'key': 'journal', 'arm': 'Ամսագիր'}
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
