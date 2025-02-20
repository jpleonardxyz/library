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

function displayBooks() {
    const container = document.querySelector(".container");
    
    for (const curBook of myLibrary) {
        console.log(curBook);
        const card = createNewCard(curBook);
        container.appendChild(card);
    }
}

function createNewCard(curBook) {
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
    return newCard;
}

const showFormBtn = document.querySelector("#new-book");
const form = document.querySelector("form");
showFormBtn.addEventListener("click", () => {
    form.style.visibility = "visible";
});