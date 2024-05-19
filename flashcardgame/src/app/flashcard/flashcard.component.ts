// flashcard.component.ts
import { Component, OnInit } from '@angular/core';
import { VocabService } from '../services/vocab.service';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent implements OnInit {
  currentWord = '';
  currentDefinition = '';
  userDefinition = '';
  right = 0;
  wrong = 0;
  total = 0;
  isCorrect:boolean = false;
  isWrong:boolean = false;

  constructor(private vocabService: VocabService) { }

  ngOnInit(): void {
    this.nextWord();
    this.total = this.vocabService.vocab.length;
  }

  nextWord(): void {
    const flashcard = this.vocabService.vocab[Math.floor(Math.random() * this.vocabService.vocab.length)];
    this.currentWord = flashcard.word;
    this.currentDefinition = flashcard.definition;
  }

  checkDefinition(): void {
    if (this.userDefinition.toLowerCase() === this.currentDefinition.toLowerCase()) {
      this.right++;
      this.isCorrect = true;
      this.isWrong = false;
    } else {
      this.wrong++;
      this.isCorrect = false;
      this.isWrong = true;
      console.log(this.isCorrect);
      console.log(this.isWrong);
    }

    setTimeout(() => {
      this.userDefinition = '';
      this.isCorrect = false;
      this.isWrong = false;
      this.nextWord();
    }, 2000);
  }
  newGame(): void {
    this.right = 0;
    this.wrong = 0;
    this.total = 0;
    this.isCorrect = false;
    this.isWrong = false;
    this.userDefinition = '';
    this.currentWord = '';
    // Add code to load the first word
  }
}