const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    var book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function displayLibrary() {
    for(i=0;i<myLibrary.length;i++) {
        console.log(myLibrary[i].author);
    }
}


function createCard() {
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    container.appendChild(newCard);

    const title = document.createElement("div");
    const author = document.createElement("div");
    const pages = document.createElement("div");
    const read = document.createElement("div");

    title.classList.add("title");

    newCard.appendChild(title);
    newCard.appendChild(author);
    newCard.appendChild(pages);
    newCard.appendChild(read);

    title.textContent = myLibrary[i].title;
    author.textContent = `Author: ${myLibrary[i].author}`;
    pages.textContent = `No. of Pages: ${myLibrary[i].pages}`;
    read.textContent = `Read: ${myLibrary[i].read}`;
}

function createLibrary(myLibrary) {
    for(i=0;i<myLibrary.length;i++){
        createCard();
    }
}


addBookToLibrary('Percy Jackson: The lightning thief', 'Rick Riordan', 264, "Yes");

addBookToLibrary('Homo Deus', 'Yuval Noah Harari', 786, "No");

const container = document.querySelector(".container");

createLibrary(myLibrary);