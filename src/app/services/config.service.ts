import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  menuItems = [
    {
      'menu': 'info',
      'rows': [
        {'key': 'operator', 'arm': 'Օպերատոր', 'size': 'M', 'icon': 'user'},
        {'key': 'person', 'arm': 'Անձ', 'size': 'XL', 'icon': 'id-card'},
        {'key': 'science-field', 'arm': 'Գիտության ոլորտ', 'size': 'M'},
        {'key': 'boh', 'arm': 'ԲՈՀ', 'size': 'M'},
        {'key': 'statistics', 'arm': 'Վիճակագրություն', 'size': 'XL', 'icon': 'chart-bar'},
        {'key': 'journal', 'arm': 'Ամսագրեր', 'size': 'XL'}
      ],
      'arm': 'Տեղեկատու'
    },
    {
      'menu': 'new',
      'rows': [
        {'key': 'new-journal', 'arm': 'Նոր Ամսագիր', 'size': 'XL'}
      ],
      'arm': 'Նոր գրառում'
    },
    {
      'menu': 'admin',
      'rows': [
        {'key': 'theme', 'arm': 'Գունավորում'},
        {'key': 'theme', 'arm': 'Լռելայն արժեքներ'}
      ],
      'arm': 'Կարգավորումներ'
    }
  ];

  constructor() { }

}
