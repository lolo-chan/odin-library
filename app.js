const myLibrary = [];
const dialog = document.querySelector('.dialog');
const newBookBtn = document.querySelector('.newButton');


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

function createForm() {
    const bookForm = document.createElement("form");

    dialog.appendChild(bookForm);

    const titleInp = document.createElement('input');
    titleInp.setAttribute("type", "text");
    titleInp.setAttribute("placeholder", "Title")
    titleInp.setAttribute("name", "title");
    bookForm.appendChild(titleInp);

    const authorInp = document.createElement('input');
    authorInp.setAttribute("type", "text");
    authorInp.setAttribute("placeholder", "Author")
    authorInp.setAttribute("name", "author");
    bookForm.appendChild(authorInp);

    const pagesInp = document.createElement('input');
    pagesInp.setAttribute("type", "number");
    pagesInp.setAttribute("placeholder", "No. of Pages")
    pagesInp.setAttribute("name", "pages");
    bookForm.appendChild(pagesInp);

    const readInp = document.createElement('input');
    readInp.setAttribute("type", "text");
    readInp.setAttribute("placeholder", "Read?")
    readInp.setAttribute("name", "read");
    bookForm.appendChild(readInp);

    const submit = document.createElement('button');
    bookForm.appendChild(submit);
}



newBookBtn.addEventListener('click', () => {
    dialog.showModal();
    createForm();
})

addBookToLibrary('Percy Jackson: The lightning thief', 'Rick Riordan', 264, "Yes");

addBookToLibrary('Homo Deus', 'Yuval Noah Harari', 786, "No");

const container = document.querySelector(".container");

createLibrary(myLibrary);