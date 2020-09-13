class Game {
  constructor({ outputWr, wordWr, categoryWr, lettersWr }) {
    this.output = outputWr;
    this.word = wordWr;
    this.category = categoryWr;
    this.letters = lettersWr;
  }

  start() {
    for (let i = 0; i < 26; i++) {
      const label = (i + 10).toString(36);
      const button = document.createElement("button");
      button.innerHTML = label;
      this.letters.appendChild(button);
    }
  }
}
