const myLibrary = [];
const addBookButton = document.querySelector("#new-book-add");
const addTitle = document.querySelector("#new-book-title");
const addAuthor = document.querySelector("#new-book-author");
const addPages = document.querySelector("#new-book-pages");

let book001 = new Book("The Munchkin", "Samwise Eatspies", 312);
let book002 = new Book("The Rotor of Chronology", "Randy Newdude", 245);
let book003 = new Book("The Hue of Spellcasting", "Terry Rincewind", 195);

myLibrary.push(book001);
myLibrary.push(book002);
myLibrary.push(book003);
displayBooks();

addBookButton.addEventListener("click", (event) => addBookToLibrary());

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = false;
  this.info = function () {
    return (
      `Title: ${this.title}
Author: ${this.author}
Pages:  ${this.pages}
Read: ` + (this.read ? `Yes` : `no`)
    );
  };
}

function addBookToLibrary() {
  if (addTitle && addAuthor && addPages ) {
    myLibrary.push(new Book(addTitle.value,addAuthor.value,addPages.value));
    displayBooks();
    addTitle.value = ""
    addAuthor.value = ""
    addPages.value = ""
  }

}

function displayBooks() {
  let bookCards = document.getElementById("book-cards");
  while (bookCards.firstChild) {
    bookCards.removeChild(bookCards.lastChild);
  }
  myLibrary.forEach((book) => {
    console.log(book.info());
    let ul = document.createElement("ul");
    ul.classList.add("book");
    let li = document.createElement("li");
    let node = document.createTextNode(`Title:`);
    li.appendChild(node);
    ul.appendChild(li);
    li = document.createElement("li");
    node = document.createTextNode(book.title);
    li.appendChild(node);
    ul.appendChild(li);
    li = document.createElement("li");
    node = document.createTextNode(`Author:`);
    li.appendChild(node);
    ul.appendChild(li);
    li = document.createElement("li");
    node = document.createTextNode(book.author);
    li.appendChild(node);
    ul.appendChild(li);
    li = document.createElement("li");
    node = document.createTextNode(`Pages:`);
    li.appendChild(node);
    ul.appendChild(li);
    li = document.createElement("li");
    node = document.createTextNode(book.pages);
    li.appendChild(node);
    ul.appendChild(li);
    li = document.createElement("li");
    node = document.createTextNode(`Read:`);
    li.appendChild(node);
    ul.appendChild(li);
    li = document.createElement("li");
    node = document.createTextNode(book.read ? `Yes` : `no`);
    li.appendChild(node);
    ul.appendChild(li);
    bookCards.appendChild(ul);
  });
}
