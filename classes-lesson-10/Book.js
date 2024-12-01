class Book {
    constructor(title, author, year) {
      this.title = title;
      this.author = author;
      this.year = year;
    }
  

    get title() {
      return this._title;
    }
  
    set title(value) {
      if (typeof value === 'string' && value.length > 0) {
        this._title = value;
      } else {
        console.log('Invalid title');
      }
    }
  
    get author() {
      return this._author;
    }
  
    set author(value) {
      if (typeof value === 'string' && value.length > 0) {
        this._author = value;
      } else {
        console.log('Invalid author');
      }
    }
  
    get year() {
      return this._year;
    }
  
    set year(value) {
      if (typeof value === 'number' && value > 0) {
        this._year = value;
      } else {
        console.log('Invalid year');
      }
    }
  
    printInfo() {
      console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
    }
  
    static findOldestBook(books) {
      return books.reduce((oldest, current) => {
        return current.year < oldest.year ? current : oldest;
      });
    }
  }
  
  module.exports = Book;
  