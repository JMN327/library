class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
      return (
        `Title: ${this.title}
        Author: ${this.author}
        Pages:  ${this.pages}
        Read: ` + (this.read ? `Yes` : `no`)
      );
    };
  }
} 

const myLibrary = [];
const addBookButton = document.querySelector("#new-book-add");
const readCheckbox = document.querySelector(".read-checkbox");
const addTitle = document.querySelector("#new-book-title");
const addAuthor = document.querySelector("#new-book-author");
const addPages = document.querySelector("#new-book-pages");
const bookCards = document.querySelector("#book-cards");

let book001 = new Book("The Munchkin", "Samwise Eatspies", 312, true);
let book002 = new Book("The Rotor of Chronology", "Randy Newdude", 245, false);
let book003 = new Book(
  "The Hue of Spellcasting",
  "Terry Rincewind",
  195,
  false
);

myLibrary.push(book001);
myLibrary.push(book002);
myLibrary.push(book003);
displayBooks();

addBookButton.addEventListener("click", (event) => addBookToLibrary());

bookCards.addEventListener("change", function (e) {
  let currentCardIndex = e.target.dataset.indexNumber;
  console.log(e.target.getAttribute("class"));
  if (e.target.checked) {
    myLibrary[currentCardIndex].read = true;
    /* displayBooks(); */
  } else {
    myLibrary[currentCardIndex].read = false;

  }
});
bookCards.addEventListener("click", function (e) {
  let currentCardIndex = e.target.dataset.indexNumber;
  console.log(e.target.getAttribute("class"));
  if (e.target.getAttribute("class") === "trash-button") {
        myLibrary.splice(currentCardIndex, 1);
    displayBooks();
  }
  if (e.target.checked) {
    myLibrary[currentCardIndex].read = true;
    /* displayBooks(); */
  } else {
    myLibrary[currentCardIndex].read = false;
    /* displayBooks(); */
  }
});



/* function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return (
      `Title: ${this.title}
Author: ${this.author}
Pages:  ${this.pages}
Read: ` + (this.read ? `Yes` : `no`)
    );
  };
} */

function addBookToLibrary() {
  if (addTitle && addAuthor && addPages) {
    myLibrary.push(new Book(addTitle.value, addAuthor.value, addPages.value));
    displayBooks();
    addTitle.value = "";
    addAuthor.value = "";
    addPages.value = "";
  }
}

function displayBooks() {
  let bookCards = document.getElementById("book-cards");
  while (bookCards.firstChild) {
    bookCards.removeChild(bookCards.lastChild);
  }
  myLibrary.forEach((book, index) => {
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

    node = document.createElement("label");
    node.classList.add("switch");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.setAttribute("data-index-number", index);
    book.read ? (checkbox.checked = true) : (checkbox.checked = false);

    let span = document.createElement("span");
    span.classList.add("slider");
    span.classList.add("round");

    node.appendChild(checkbox);
    node.appendChild(span);

    li.appendChild(node);
    ul.appendChild(li);

    /* <svg><use href="#svg-delete-forever"></use></svg> */
    let use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    use.setAttribute("href", "#svg-delete-forever");
    use.setAttribute("data-index-number", index);
    use.classList.add("trash-button");
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("data-index-number", index);
    svg.classList.add("trash-button");
    svg.appendChild(use);

    let svgWrapper = document.createElement("div");
    svgWrapper.classList.add("svg-wrapper");

    svgWrapper.appendChild(svg);

    let bookWrapper = document.createElement("div");
    bookWrapper.classList.add("book-wrapper");

    bookWrapper.appendChild(ul);
    bookWrapper.appendChild(svgWrapper);

    bookCards.appendChild(bookWrapper);
  });
}

/* <label class="switch">
  <input type="checkbox">
  <span class="slider round"></span>
</label> */
