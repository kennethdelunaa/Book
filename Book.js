const myLibrary = [];

const headers = ['Title', 'Author', 'Pages', 'Read', 'Action'];

let myTable = document.querySelector('#table');

function Book(title, author, pages, read) {
  // the constructor...
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }

  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  // take params, create a book then store it in the array

  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let read = document.getElementById('read').checked;

  const book = new Book(title, author, pages, read);

  myLibrary.push(book);

  let table = document.createElement('table');
  let headerRow = document.createElement('tr');

  headers.forEach(header => {
    let header = document.createElement('th');
    let textNode = document.createTextNode(header);
    header.appendChild(textNode);
  });

  table.appendChild(headerRow);

  myLibrary.forEach(lib => {
    let row = document.createElement('tr');
    
    Object.values(lib).forEach(text =>{
      let cell = document.createElement('td');
      let textNode = document.createTextNode(text);
      cell.appendChild(textNode);
      row.appendChild(cell);
    })

    table.appendChild(row);

  });

  myTable.appendChild(table);

  event.preventDefault();
}
