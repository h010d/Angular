import { Injectable } from '@angular/core';

@Injectable()
export class ColorsService {
  colors = [
    {
      name: 'Blue',
      colId: 1,
      price: 11,
      unID: '258523'
    },
    {
      name: 'Green',
      colId: 2,
      price: 17,
      unID: '896345'
    },
    {
      name: 'Grey',
      colId: 3,
      price: 8,
      unID: '369711'
    },
    {
      name: 'Brown',
      colId: 4,
      price: 16,
      unID: '25623'
    },
    {
      name: 'Yellow',
      colId: 5,
      price: 14,
      unID: '258693'
    },
    {
      name: 'Red',
      colId: 6,
      price: 11,
      unID: '546523'
    }
  ];
}
