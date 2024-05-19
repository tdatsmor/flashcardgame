// word.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { WordService } from './word.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('WordService', () => {
  let service: WordService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ WordService ]
    });

    service = TestBed.inject(WordService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send a POST request to the API when addWord() is called', () => {
    service.addWord('test', 'test definition').subscribe();

    const req = httpMock.expectOne('http://your-api-url/words');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ word: 'test', definition: 'test definition' });

    req.flush({});
  });
});