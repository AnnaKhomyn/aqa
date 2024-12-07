const Book = require('./Book');
const EBook = require('./Ebook');

const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
const book2 = new Book('1984', 'George Orwell', 1949);
const ebook1 = new EBook('Digital Fortress', 'Dan Brown', 1998, 'PDF');
const ebook2 = new EBook('The Shining', 'Stephen King', 1977, 'EPUB');

book1.printInfo();
book2.printInfo();
ebook1.printInfo();
ebook2.printInfo();

const books = [book1, book2, ebook1, ebook2];
const oldestBook = Book.findOldestBook(books);
console.log(`The oldest book is:`);
oldestBook.printInfo();

const newEBook = EBook.createEBookFromBook(book2, 'MOBI');
newEBook.printInfo();
