import { Quote } from './Quote.js';

export class Game {
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
    this.quote.guess(letter);
    this.drawQuote();
  }

  drawQuote() {
    const content = this.quote.getContent();
    this.wordWr.innerHTML = content;
  }
}
