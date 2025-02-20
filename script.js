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
    displayBooks();
}

function displayBooks() {
    const container = document.querySelector(".container");
    container.replaceChildren();
    
    for (i = 0; i < myLibrary.length; i++) {

        const curBook = myLibrary[i];
        const newCard = createNewCard(curBook, i);
        container.appendChild(newCard);      
    }
}

function createNewCard(curBook, index) {
    const newCard = document.createElement("div");

    const title = document.createElement("h2");
    title.textContent = curBook.title;

    const author = document.createElement("h3");
    author.textContent = "by " + curBook.author;

    const pages = document.createElement("p");
    pages.textContent = curBook.pages + " pages";

    const read = document.createElement("p");
    curBook.isread ? read.textContent = "Is read" : read.textContent = "Not read";

    newCard.appendChild(title);
    newCard.appendChild(author);
    newCard.appendChild(pages);
    newCard.appendChild(read);

    newCard.classList.add("card");

    const btnDelete = document.createElement("button");
    btnDelete.textContent = "Delete";
    btnDelete.classList.add("delete");
    newCard.appendChild(btnDelete);

    btnDelete.addEventListener("click", ()=> {
        myLibrary.splice(index, 1);
        displayBooks();
    });

    return newCard;
}

const showFormBtn = document.querySelector("#new-book");
const form = document.querySelector("form");
showFormBtn.addEventListener("click", () => {
    form.style.visibility = "visible";
});

const addBookBtn = document.querySelector("[type=button]");
addBookBtn.addEventListener("click", ()=> {
    const inputTitle = document.querySelector("#title");
    const inputAuthor = document.querySelector("#author");
    const inputPage = document.querySelector("#pages");
    const inputRead = document.querySelector("#read");

    const title = inputTitle.value;
    const author = inputAuthor.value;
    const pages = inputPage.value;
    const read = inputRead.checked ? true : false;

    addBookToLibrary(title, author, pages, read);
});