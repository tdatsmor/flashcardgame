import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VocabService {
  vocab = [
    { word: 'test', definition: 'one' },
    { word: 'test2', definition: 'two' },
    // Add as many words as you want
  ];

  constructor() { }

  addWord(word: string, definition: string) {
    this.vocab.push({ word, definition });
  }
}