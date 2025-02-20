const myLibrary = [];

function Book(title, author, pages, isread) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isread = isread;
}

function addBookToLibrary(title, author, pages, isread) {
    const newBook = new Book(title, author, pages, isread);
    myLibrary.push(newBook);
}