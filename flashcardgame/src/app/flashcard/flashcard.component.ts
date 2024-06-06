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

  isRandom:boolean = true;
  isEnglish:boolean = true;
  isSpeak:boolean = true;
  isListen:boolean = true;
  isSpanish:boolean = true;

  constructor(private vocabService: VocabService) { }

  ngOnInit(): void {
    this.nextWord();
    this.total = this.vocabService.vocab.length;
  }

  nextWord(): void {
    const flashcard = this.vocabService.vocab[Math.floor(Math.random() * this.vocabService.vocab.length)];
    this.currentWord = flashcard.word;
    this.currentDefinition = flashcard.definition;

    if (this.isSpeak) {
      this.speak(this.currentWord);
    } else if (this.isListen) {
      this.startListening();
    } else if (this.isSpanish) {
      this.currentWord = flashcard.definition;
      this.currentDefinition = flashcard.word;
    }
  }

  checkDefinition(): void {
    let definitions = this.currentDefinition.toLocaleLowerCase().split('\\');
    if(definitions.includes(this.userDefinition.toLowerCase())) {
      this.right++;
      this.isCorrect = true;
      this.isWrong = false;
    } else {
      this.wrong++;
      this.isCorrect = false;
      this.isWrong = true;
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
    this.isRandom = true;
    this.isEnglish = true;
    this.isSpeak = true;
    this.isListen = true;
    this.isSpanish = true;
    this.ngOnInit();
  }

  onSpeak(): void {
    this.resetModes();
    this.isSpeak = true;
    this.nextWord();
  }

  onEnglish(): void {
    this.resetModes();
    this.isEnglish = true;
    this.nextWord();
  }

  onSpanish(): void {
    this.resetModes();
    this.isSpanish = true;
    this.nextWord();
  }

  onListen(): void {
    this.resetModes();
    this.isListen = true;
    this.nextWord();
  }

  onRandom(): void {
    this.resetModes();
    this.isRandom = true;
    this.nextWord();
  }

  resetModes(): void {
    this.isRandom = false;
    this.isEnglish = false;
    this.isSpeak = false;
    this.isListen = false;
    this.isSpanish = false;
  }

  speak(text: string): void {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  }

  startListening(): void {
    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.lang = 'es';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
  
    recognition.start();
  
    recognition.onresult = (event: any) => {
      const speechResult = event.results[0][0].transcript;
      this.userDefinition = speechResult;
      this.checkDefinition();
    };
  
    recognition.onerror = (event: any) => {
      console.log('Error occurred in recognition: ' + event.error);
    };
  }
}