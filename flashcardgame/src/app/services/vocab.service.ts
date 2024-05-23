import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VocabService {
  vocab = [
    {
      "word": "Adiós",
      "definition": "Goodbye"
    },
    {
      "word": "Buenos días",
      "definition": "Good morning"
    },
    {
      "word": "Buenas noches",
      "definition": "Good night"
    },
    {
      "word": "Buenas tardes",
      "definition": "Good afternoon"
    },
    {
      "word": "De nada",
      "definition": "You’re welcome"
    },
    {
      "word": "Disculpe",
      "definition": "Excuse me"
    },
    {
      "word": "Gracias",
      "definition": "Thank you"
    },
    {
      "word": "Hola",
      "definition": "Hi / Hello"
    },
    {
      "word": "No",
      "definition": "No"
    },
    {
      "word": "Perdón",
      "definition": "Sorry / Excuse me"
    },
    {
      "word": "Por favor",
      "definition": "Please"
    },
    {
      "word": "Salud",
      "definition": "Bless you / Cheers"
    },
    {
      "word": "Sí",
      "definition": "Yes"
    },
    {
      "word": "El amigo",
      "definition": "Friend"
    },
    {
      "word": "La chica",
      "definition": "Girl"
    },
    {
      "word": "El chico",
      "definition": "Boy / Guy"
    },
    {
      "word": "El compañero",
      "definition": "Classmate / Coworker"
    },
    {
      "word": "La esposa",
      "definition": "Wife"
    },
    {
      "word": "El esposo",
      "definition": "Husband"
    },
    {
      "word": "La familia",
      "definition": "Family"
    },
    {
      "word": "La gente",
      "definition": "People"
    },
    {
      "word": "La hermana",
      "definition": "Sister"
    },
    {
      "word": "El hermano",
      "definition": "Brother"
    },
    {
      "word": "Los hermanos",
      "definition": "Siblings"
    },
    {
      "word": "La hija",
      "definition": "Daughter"
    },
    {
      "word": "El hijo",
      "definition": "Son"
    },
    {
      "word": "El hombre",
      "definition": "Man"
    },
    {
      "word": "La mamá",
      "definition": "Mom"
    },
    {
      "word": "La mujer",
      "definition": "Woman"
    },
    {
      "word": "Los niños",
      "definition": "Kids"
    },
    {
      "word": "La novia",
      "definition": "Girlfriend"
    },
    {
      "word": "El novio",
      "definition": "Boyfriend"
    },
    {
      "word": "El papá",
      "definition": "Dad"
    },
    {
      "word": "La persona",
      "definition": "Person"
    },
    {
      "word": "El señor",
      "definition": "Mr. / Sir / Man"
    },
    {
      "word": "La señora",
      "definition": "Mrs. / Madam / Woman"
    },
    {
      "word": "La señorita",
      "definition": "Miss"
    },
    {
      "word": "El vecino",
      "definition": "Neighbor"
    }];

  constructor() { }

  addWord(word: string, definition: string) {
    this.vocab.push({ word, definition });
  }
}