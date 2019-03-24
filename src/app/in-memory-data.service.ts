import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Chore } from './chore';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const chores = [
      { id: 11, name: 'Vacuum hallway' },
      { id: 12, name: 'Clean toilet' },
      { id: 13, name: 'Clean windows' },
    ];
    return { chores };
  }

  genId(chores: Chore[]): number {
    return chores.length > 0 ? Math.max(...chores.map(chore => chore.id)) + 1 : 11;
  }

  constructor() { }
}
