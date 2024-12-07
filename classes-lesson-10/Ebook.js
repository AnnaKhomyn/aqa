const Book = require('./Book');

class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this.fileFormat = fileFormat;
  }

  get fileFormat() {
    return this._fileFormat;
  }

  set fileFormat(value) {
    const allowedFormats = ['PDF', 'EPUB', 'MOBI'];
    if (allowedFormats.includes(value)) {
      this._fileFormat = value;
    } else {
      console.log('Invalid file format');
    }
  }

  printInfo() {
    console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Format: ${this.fileFormat}`);
  }

  static createEBookFromBook(bookInstance, fileFormat) {
    return new EBook(bookInstance.title, bookInstance.author, bookInstance.year, fileFormat);
  }
}

module.exports = EBook;


