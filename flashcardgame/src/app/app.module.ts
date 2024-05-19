import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlashcardComponent } from './flashcard/flashcard.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { ScoreComponent } from './score/score.component';
import { WordUpdateComponent } from './word-update/word-update.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'flashcards', component: FlashcardComponent },
  { path: 'word-update', component: WordUpdateComponent },
  { path: '', component: FlashcardComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FlashcardComponent,
    ScoreComponent,
    WordUpdateComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
