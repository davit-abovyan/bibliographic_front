import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
  zIndex = 1;
  menuItems = [
    {
      'menu': 'info',
      'rows': [
        {'key': 'operator', 'arm': 'Օպերատոր', 'size': 'M', 'icon': 'user'},
        {'key': 'person', 'arm': 'Անձ', 'size': 'XL', 'icon': 'id-card'},
        {'key': 'science-field', 'arm': 'Գիտության ոլորտ', 'size': 'M'},
        {'key': 'boh', 'arm': 'ԲՈՀ', 'size': 'M'},
        {'key': 'statistics', 'arm': 'Վիճակագրություն', 'size': 'XL', 'icon': 'chart-bar'},
        {'key': 'journal', 'arm': 'Ամսագրեր', 'size': 'XL', 'icon': 'book'}
      ],
      'arm': 'Տեղեկատու'
    },
    {
      'menu': 'new',
      'rows': [
        {'key': 'new-journal', 'arm': 'Նոր Ամսագիր', 'size': 'XL', 'icon': 'book'}
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

  focusWindow(id: string): void {
    this.zIndex = +this.zIndex + 1;
    document.getElementById(id).style.zIndex = '' + this.zIndex;
  }
}
