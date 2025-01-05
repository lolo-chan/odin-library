const myLibrary = [];
const dialog = document.querySelector('.dialog');
const newBookBtn = document.querySelector('.newButton');
const titleInp = document.querySelector('.titleInput');
const authorInp = document.querySelector('.authorInput');
const pagesInp = document.querySelector('.pagesInput');
const readInp = document.querySelector('.readInput');
const submit = document.querySelector('.submit');
const close = document.querySelector('.close');

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

function removeBook(i, lib){
    lib.splice(i, 1);
}

function createCard(i) {
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    container.appendChild(newCard);

    const title = document.createElement("div");
    const author = document.createElement("div");
    const pages = document.createElement("div");
    const read = document.createElement("button");

    title.classList.add("title");

    newCard.appendChild(title);
    newCard.appendChild(author);
    newCard.appendChild(pages);
    newCard.appendChild(read);

    title.textContent = myLibrary[i].title;
    author.textContent = `Author: ${myLibrary[i].author}`;
    pages.textContent = `No. of Pages: ${myLibrary[i].pages}`;
    read.textContent = `Read: ${myLibrary[i].read}`;

    const remove = document.createElement('button');
    newCard.appendChild(remove);
    remove.classList.add('remove');
    remove.textContent = "Delete";

    if(myLibrary[i].read === true){
        read.classList.add('read');
        read.textContent = "Read";
    }
    else {
        read.classList.add('not-read');
        read.textContent = "Not Read";
    }

    remove.addEventListener('click', () => {
        removeBook(i, myLibrary);
        container.innerHTML = '';
        createLibrary(myLibrary);
    })
    
}

function clearLibrary(){
    
}

function createLibrary(myLibrary) {
    for(i=0;i<myLibrary.length;i++){
        createCard(i);
    }
}

newBookBtn.addEventListener('click', () => {
    dialog.showModal();
})

submit.addEventListener('click', (e) => {
    e.preventDefault();
    addBookToLibrary(titleInp.value, authorInp.value, pagesInp.value, readInp.value);
    titleInp.value = '';
    authorInp.value = '';
    pagesInp.value = null;
    dialog.close();
    createCard(myLibrary.length-1);
})

close.addEventListener('click', (e) => {
    e.preventDefault();
    titleInp.value = '';
    authorInp.value = '';
    pagesInp.value = null;
    dialog.close();
})

addBookToLibrary('Percy Jackson: The lightning thief', 'Rick Riordan', 264, true);

addBookToLibrary('Homo Deus', 'Yuval Noah Harari', 786, false);

const container = document.querySelector(".container");

createLibrary(myLibrary);