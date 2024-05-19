// word-update.component.spec.ts
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { WordUpdateComponent } from './word-update.component';
import { WordService } from '../services/word.service';
import { of } from 'rxjs';

describe('WordUpdateComponent', () => {
  let component: WordUpdateComponent;
  let fixture: ComponentFixture<WordUpdateComponent>;
  let wordService: WordService;

  beforeEach(() => {
    const wordServiceSpy = jasmine.createSpyObj('WordService', ['addWord']);

    TestBed.configureTestingModule({
      declarations: [ WordUpdateComponent ],
      providers: [ { provide: WordService, useValue: wordServiceSpy } ]
    });

    fixture = TestBed.createComponent(WordUpdateComponent);
    component = fixture.componentInstance;
    wordService = TestBed.inject(WordService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call addWord() method of WordService when addWord() is called', () => {
    const addWordSpy = jasmine.createSpyObj('WordService', ['addWord']);
    addWordSpy.addWord.and.returnValue(of({}));
    component.word = 'test';
    component.definition = 'test definition';
    component.addWord();
    expect(addWordSpy.addWord).toHaveBeenCalledWith('test', 'test definition');
  });
});