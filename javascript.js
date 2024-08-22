const myLibrary = [];

let book001 = new Book("The Munchkin", "Samwise Eatspies", 312);
let book002 = new Book("The Rotor of Chronology", "Randy Newdude", 245);
let book003 = new Book("The Hue of Spellcasting", "Terry Rincewind", 195);

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
    return `Title: ${this.title}
Author: ${this.author}
Pages:  ${this.pages}
Read: ` + (this.read ? `Yes` : `no`);
  }
}

function addBookToLibrary() {
  // do stuff here
}

function displayBooks() {
    myLibrary.forEach(book => {
        console.log(book.info());
        let ul = document.createElement("ul")
        ul.classList.add("book")
        let li = document.createElement("li");
        let node = document.createTextNode(`Title:`);
        li.appendChild(node);
        ul.appendChild(li)
        li = document.createElement("li");
        node = document.createTextNode(book.title);
        li.appendChild(node);
        ul.appendChild(li)
        li = document.createElement("li");
        node = document.createTextNode(`Author:`);
        li.appendChild(node);
        ul.appendChild(li)
        li = document.createElement("li");
        node = document.createTextNode(book.author);
        li.appendChild(node);
        ul.appendChild(li)
        li = document.createElement("li");
        node = document.createTextNode(`Pages:`);
        li.appendChild(node);
        ul.appendChild(li)
        li = document.createElement("li");
        node = document.createTextNode(book.pages);
        li.appendChild(node);
        ul.appendChild(li)
        li = document.createElement("li");
        node = document.createTextNode(`Read:`);
        li.appendChild(node);
        ul.appendChild(li)
        li = document.createElement("li");
        node = document.createTextNode(book.read ? `Yes` : `no`);
        li.appendChild(node);
        ul.appendChild(li)
        let element = document.getElementById("book-cards");
        element.appendChild(ul);
    });
}