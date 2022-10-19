import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './core/hero/hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice', lastName: 'priezvisko1' },
      { id: 13, name: 'Bombasto', lastName: 'priezvisko2' },
      { id: 14, name: 'Celeritas', lastName: 'priezvisko3' },
      { id: 15, name: 'Magneta', lastName: 'priezvisko4' },
      { id: 16, name: 'RubberMan', lastName: 'priezvisko5' },
      { id: 17, name: 'Dynama', lastName: 'priezvisko6' },
      { id: 18, name: 'Dr. IQ', lastName: 'priezvisko7' },
      { id: 19, name: 'Magma', lastName: 'priezvisko8' },
      { id: 20, name: 'Tornado', lastName: 'priezvisko9' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}