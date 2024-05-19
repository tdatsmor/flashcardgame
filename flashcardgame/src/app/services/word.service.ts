import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  constructor(private http: HttpClient) {}

  addWord(word: string, definition: string) {
    const payload = { word, definition };
    return this.http.post('http://your-api-url/words', payload);
  }
}