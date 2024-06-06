// flashcard.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlashcardComponent } from './flashcard.component';
import { VocabService } from '../services/vocab.service';

describe('FlashcardComponent', () => {
  let component: FlashcardComponent;
  let fixture: ComponentFixture<FlashcardComponent>;
  let vocabService: VocabService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashcardComponent ],
      providers: [ VocabService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcardComponent);
    component = fixture.componentInstance;
    vocabService = TestBed.inject(VocabService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get a new word on initialization', () => {
    spyOn(component, 'nextWord');
    component.ngOnInit();
    expect(component.nextWord).toHaveBeenCalled();
  });

  it('should check definition correctly', () => {
    component.currentDefinition = 'test definition';
    component.userDefinition = 'Test Definition';
    component.checkDefinition();
    expect(component.right).toBe(1);
    expect(component.wrong).toBe(0);

    component.userDefinition = 'Wrong Definition';
    component.checkDefinition();
    expect(component.right).toBe(1);
    expect(component.wrong).toBe(1);
  });
  
  describe('speak', () => {
    it('should call speechSynthesis.speak with a new SpeechSynthesisUtterance', () => {
      const text = 'test';
      const utterance = new SpeechSynthesisUtterance(text);
      spyOn(window.speechSynthesis, 'speak');

      component.speak(text);

      expect(window.speechSynthesis.speak).toHaveBeenCalledWith(utterance);
    });
  });

  describe('startListening', () => {
    it('should start speech recognition', () => {
      const recognition = new (window as any).webkitSpeechRecognition();
      spyOn(recognition, 'start');

      component.startListening();

      expect(recognition.start).toHaveBeenCalled();
    });
  });
});