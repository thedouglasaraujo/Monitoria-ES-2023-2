class Book {
  constructor(title, description, author) {
    this.id = this.generateId();
    this.title = title;
    this.description = description;
    this.author = author;
  }

  generateId() {
    const currentId = Book.nextId || 1;
    Book.nextId = currentId + 1;
    return String(currentId);
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(bookInfo) {
    const { title, description, author } = bookInfo;
    const newBook = new Book(title, description, author);
    this.books.push(newBook);
    return newBook;
  }

  getBooks() {
    return this.books;
  }

  removeBookById(id) {
    this.books = this.books.filter((book) => book.id !== id);
  }

  getBookById(id) {
    return this.books.find(book => book.id === id);
  }

  updateBookById(id, info) {
    const book = this.getBookById(id);
    if (book) {
      const { title, description, author } = info;
      book.title = title !== undefined ? title : book.title;
      book.description = description !== undefined ? description : book.description;
      book.author = author !== undefined ? author : book.author;
      return book;
    }
  }
}

const biblioteca = new Library();

const book1 = biblioteca.addBook({ title: 'Add Livro', description: 'Add Descrição', author: 'Add Autor' });
const book2 = biblioteca.addBook({ title: 'Add Livro 2', description: 'Add Descrição 2', author: 'Add Autor 2' });