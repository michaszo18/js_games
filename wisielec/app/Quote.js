export class Quote {
  constructor(text) {
    this.text = text;
  }

  getContent() {
    let content = "";
    for (const char of this.text) {
      if (char === " ") {
        content += " ";
      } else {
        content += "_";
      }
    }
    return content;
  }
}
