// score.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent {
  @Input() correctAnswers: number = 0;
  @Input() wrongAnswers: number = 0;
}