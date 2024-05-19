// vocab.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { VocabService } from './vocab.service';

describe('VocabService', () => {
  let service: VocabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VocabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have vocab array', () => {
    expect(service.vocab).toBeDefined();
    expect(service.vocab.length).toBeGreaterThan(0);
  });

  it('should have words with definitions', () => {
    service.vocab.forEach(vocab => {
      expect(vocab.word).toBeDefined();
      expect(vocab.definition).toBeDefined();
    });
  });
});