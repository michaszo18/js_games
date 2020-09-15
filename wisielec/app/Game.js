import { Quote } from './Quote.js';

export class Game {

  currentStep = 0;
  lastStep = 8;

  quotes = [
    {
      text: "pan pampeusz",
      category: "Utwory literackie",
    },
  ];

  constructor({ outputWr, wordWr, categoryWr, lettersWr }) {
    this.outputWr = outputWr;
    this.wordWr = wordWr;
    this.categoryWr = categoryWr;
    this.lettersWr = lettersWr;

    const { text, category } = this.quotes[
      Math.floor(Math.random() * this.quotes.length)
    ];

    this.categoryWr.innerHTML = category;
    this.quote = new Quote(text);
  }

  start() {
    this.drawLetters();
    this.drawQuote();
  }

  drawLetters() {
    const alphabet = "aąbcćdeęfghijklłmnńoóprsśtuwyzźż";
    for (const label of alphabet) {
      const button = document.createElement("button");
      button.innerHTML = label;
      button.addEventListener("click", () => this.guess(label, event));
      this.lettersWr.appendChild(button);
    }
  }

  guess(letter, e) {
    e.target.disabled = true;
    if(this.quote.guess(letter)) {
      this.drawQuote(); 
    } else {
      this.mistake(this.currentStep);
      this.currentStep += 1;

      if(this.currentStep === this.lastStep) {
        this.loosing();
      }
    }

  }

  drawQuote() {
    const content = this.quote.getContent();
    this.wordWr.innerHTML = content;

    if(content.includes('_') === false) {
      this.winning();
    }
  }

  mistake(step) {
    document.getElementsByClassName('step')[step]
    .style.opacity = 1;
  }

  winning() {
    this.wordWr.innerHTML = 'Wygrana!!!';
    this.lettersWr.innerHTML = '';
  } 

  loosing() {
    this.wordWr.innerHTML = 'Przegrana';
    this.lettersWr.innerHTML = '';
  }

}
