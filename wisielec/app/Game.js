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
    const content = this.quote.getContent();
    this.wordWr.innerHTML = content;
  }

  drawLetters() {
    const alphabet = "aąbcćdeęfghijklłmnńoóprsśtuwyzźż";

    for (const label of alphabet) {
      const button = document.createElement("button");
      button.innerHTML = label;
      button.addEventListener("click", () => this.guess(label));
      this.lettersWr.appendChild(button);
    }
  }

  guess(letter) {
    console.log(letter);
  }
}
