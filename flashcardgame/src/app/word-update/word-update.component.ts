// word-update.component.ts
import { Component } from '@angular/core';
import { VocabService } from '../services/vocab.service';

@Component({
  selector: 'app-word-update',
  templateUrl: './word-update.component.html',
  styleUrls: ['./word-update.component.css']
})
export class WordUpdateComponent {
  word = '';
  definition = '';

  constructor(private vocabService: VocabService) {}

  addWord() {
    this.vocabService.addWord(this.word, this.definition);
  }
}