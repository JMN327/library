const myLibrary = [];

let book001 = new Book("The Munchkin", "Samwise Eatspies", 312);
let book002 = new Book("The Rotor of Chronology", "Randy Newdude", 245);
let book003 = new Book("the Hue of Spellcasting", "Terry Rincewind", 195);

myLibrary.push(book001);
myLibrary.push(book002);
myLibrary.push(book003);
displayBooks();

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = false;
  this.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ` + (this.read ? `has been read` : `not read yet`);
  }
}

function addBookToLibrary() {
  // do stuff here
}

function displayBooks() {
    myLibrary.forEach(book => {
        console.log(book.info());
        let para = document.createElement("p");
        let node = document.createTextNode(book.info());
        para.appendChild(node);
        let element = document.getElementById("book-cards");
        element.appendChild(para);
    });
}