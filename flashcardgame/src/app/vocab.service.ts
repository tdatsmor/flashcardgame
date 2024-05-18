import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VocabService {
  vocab = [
    { word: 'Angular', definition: 'A platform for building web applications.' },
    { word: 'TypeScript', definition: 'A typed superset of JavaScript.' },
    // Add as many words as you want
  ];

  constructor() { }
}