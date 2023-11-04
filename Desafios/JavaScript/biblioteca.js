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
      book.title = title ? title : book.title;
      book.description = description ? description : book.description;
      book.author = author ? author : book.author;
      return book;
    }
  }
}

const biblioteca = new Library();

const book1 = biblioteca.addBook({
  title: 'O Último Desejo: A Saga do Bruxo Geralt de Rívia - Volume 1',
  description: 'Geralt de Rívia é um bruxo sagaz e habilidoso. Um assassino impiedoso e de sangue-frio treinado, desde a infância, para caçar e eliminar monstros. Seu único objetivo: destruir as criaturas do mal que assolam o mundo. Um mundo fantástico criado por Sapkowski com claras influências da mitologia eslava. Um mundo em que nem todos os que parecem monstros são maus nem todos os que parecem anjos são bons...',
  author: 'Andrzej Sapkowski'
});

const book2 = biblioteca.addBook({
  title: 'A Espada do Destino - The Witcher: Volume 2',
  description: 'Geralt de Rívia é um bruxo. Um feiticeiro cheio de astúcia. Um matador impiedoso. Um assassino de sangue-frio, treinado desde a infância para caçar e eliminar monstros. Seu único objetivo: destruir as criaturas do mal que assolam o mundo. Um mundo fantástico criado por Sapkowski com claras influências da mitologia eslava. Um mundo em que nem todos os que parecem monstros são maus e nem todos os que parecem anjos são bons. A espada do destino é o segundo livro da saga do bruxo Geralt de Rívia e terá continuidade com O sangue dos elfos.',
  author: 'Andrzej Sapkowski'
});

const book3 = biblioteca.addBook({
  title: 'O Sangue dos Elfos - The Witcher: Volume 3',
  description: 'Geralt de Rívia é um bruxo sagaz e habilidoso. Um assassino impiedoso e de sangue-frio treinado, desde a infância, para caçar e eliminar monstros. Seu único objetivo: destruir as criaturas do mal que assolam o mundo. Um mundo fantástico criado por Sapkowski com claras influências da mitologia eslava. Um mundo em que nem todos os que parecem monstros são maus e nem todos os que parecem anjos são bons...',
  author: 'Andrzej Sapkowski'
});

console.log(biblioteca.getBooks()); // Livros 1, 2 e 3

console.log("Livro 2: ", biblioteca.getBookById(book2.id));

biblioteca.removeBookById(book1.id); // Remove Livro 1

console.log(biblioteca.getBooks()); // Livro 2 e Livro 3

const book4 = biblioteca.addBook({
  title: 'Tempo do desprezo - The Witcher - A saga do bruxo Geralt de Rívia: 4',
  description: 'Tempo do desprezo é o quarto livro da saga do bruxo Geralt de Rívia. Geralt lutou contra monstros e demônios por todo o país, mas até ele pode não estar preparado para o que está acontecendo com seu mundo. Há intrigas, divergências e rebeliões por todo lado. Os Elfos e outros seres não humanos vivem sob repressão há décadas. Os Magos brigam uns com os outros, alguns a soldo dos reis, outros simpatizantes dos elfos. E, nesse cenário de medo e desprezo, Geralt e sua amante Yennefer precisam proteger Ciri, herdeira órfã e procurada por todos os lados. Ela tem o poder de salvar o mundo ou, talvez, acabar com ele.',
  author: 'Andrzej Sapkowski'
});

console.log(biblioteca.getBooks()); // Livros 2, 3 e 4

biblioteca.updateBookById(book2.id, {
  title: "Novo título do Livro 2",
  description: "Nova descrição do Livro 2",
  author: "Novo autor do Livro 2"
});

console.log("Livro 2: ", biblioteca.getBookById(book2.id)); // Livro 2 com as novas alterações

biblioteca.updateBookById(book4.id, {
  author: "Modificando apenas autor do Livro 4"
});

console.log(biblioteca.getBooks()); // Livros 2, 3 e 4 (o 4 com a alteração feita em apenas uma propriedade)