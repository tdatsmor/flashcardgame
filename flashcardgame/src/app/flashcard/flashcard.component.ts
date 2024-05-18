// flashcard.component.ts
import { Component, OnInit } from '@angular/core';
import { VocabService } from '../vocab.service';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent implements OnInit {
  currentWord = '';
  currentDefinition = '';
  userDefinition = '';

  constructor(private vocabService: VocabService) { }

  ngOnInit(): void {
    this.nextWord();
  }

  nextWord(): void {
    const flashcard = this.vocabService.vocab[Math.floor(Math.random() * this.vocabService.vocab.length)];
    this.currentWord = flashcard.word;
    this.currentDefinition = flashcard.definition;
  }

  checkDefinition(): void {
    if (this.userDefinition.toLowerCase() === this.currentDefinition.toLowerCase()) {
      alert('Correct!');
    } else {
      alert(`Sorry, the correct definition is: ${this.currentDefinition}`);
    }
    this.userDefinition = '';
    this.nextWord();
  }
}