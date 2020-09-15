export class Quote {
  constructor(text) {
    this.text = text;
    this.guessed = new Set();
  }

  getContent() {
    let content = "";
    for (const char of this.text) {
      if (char === " " || this.guessed.has(char)) {
        content += char;
      } else {
        content += "_";
      }
    }
    return content;
  }

  guess(letter) {

    if(this.text.includes(letter)) {
      this.guessed.add(letter);
      return true;
    } 
    return false;
  
  }
}
