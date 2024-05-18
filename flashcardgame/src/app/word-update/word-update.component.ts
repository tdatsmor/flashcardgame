// word-update.component.ts
import { Component } from '@angular/core';
import { WordService } from '../word.service';

@Component({
  selector: 'app-word-update',
  templateUrl: './word-update.component.html',
  styleUrls: ['./word-update.component.css']
})
export class WordUpdateComponent {
  word = '';
  definition = '';

  constructor(private wordService: WordService) {}

  addWord() {
    this.wordService.addWord(this.word, this.definition).subscribe();
    this.word = '';
    this.definition = '';
  }
}