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
    if(this.isRandom) {
    } else if (this.isEnglish) {
      this.currentWord = flashcard.word;
      this.currentDefinition = flashcard.definition;
    } else if (this.isSpeak) {
      this.currentWord = flashcard.word;
      this.currentDefinition = flashcard.definition;
      this.speak(this.currentWord);
    } else if (this.isListen) {
      this.currentWord = flashcard.word;
      this.currentDefinition = flashcard.word;
      this.startListening();
    } else if (this.isSpanish) {
      this.currentWord = flashcard.definition;
      this.currentDefinition = flashcard.word;
    }
  }

  checkDefinition(): void {
    console.log('check: ', this.userDefinition);
    console.log('this.isListen: ', this.isListen);
    let definitions = this.currentDefinition.toLocaleLowerCase().split('\\');
    console.log('check: ', this.currentDefinition.toLocaleLowerCase());
    if(definitions.includes(this.userDefinition.toLowerCase())) {
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
    this.isRandom = true;
    this.isEnglish = true;
    this.isSpeak = true;
    this.isListen = true;
    this.isSpanish = true;
    this.ngOnInit();
    // Add code to load the first word
  }

  onSpeak(): void {
    this.isRandom = false;
    this.isEnglish = false;
    this.isSpeak = true;
    this.isListen = false;
    this.isSpanish = false;
    this.nextWord();
  }
  onEnglish(): void {
    this.isRandom = false;
    this.isEnglish = true;
    this.isSpeak = false;
    this.isListen = false;
    this.isSpanish = false;
    this.nextWord();
  }
  onSpanish(): void {
    this.isRandom = false;
    this.isEnglish = false;
    this.isSpeak = false;
    this.isListen = false;
    this.isSpanish = true;
    this.nextWord();
  }
  onListen(): void {
    this.isRandom = false;
    this.isEnglish = false;
    this.isSpeak = false;
    this.isListen = true;
    this.isSpanish = false;
    this.nextWord();
  }
  onRandom(): void {
    const properties = ['isEnglish', 'isSpeak', 'isListen', 'isSpanish'];
    this.isRandom = true;
    this.isEnglish = false;
    this.isSpeak = false;
    this.isListen = false;
    this.isSpanish = false;
  
    const randomProperty = properties[Math.floor(Math.random() * properties.length)];
    if (randomProperty === 'isEnglish') {
      this.isEnglish = true;
    } else if (randomProperty === 'isSpeak') {
      this.isSpeak = true;
    } else if (randomProperty === 'isListen') {
      this.isListen = true;
    } else if (randomProperty === 'isSpanish') {
      this.isSpanish = true;
    }
    this.nextWord();
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
      console.log('Result: ', speechResult);
      this.userDefinition = speechResult;
      this.checkDefinition();
    };
  
    recognition.onerror = (event: any) => {
      console.log('Error occurred in recognition: ' + event.error);
    };
  }
}