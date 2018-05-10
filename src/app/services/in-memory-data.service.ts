import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let products = [
      { id: 11, name: 'Lenovo' },
      { id: 12, name: 'Dell' },
      { id: 13, name: 'Hp' },
      { id: 14, name: 'Samsung' },
      { id: 15, name: 'Acer' },
      { id: 16, name: 'Asus' },
      { id: 17, name: 'Msi' },
      { id: 18, name: 'Apple' }
    ];
    return { products };
  }
}
