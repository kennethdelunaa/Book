const myLibrary = [];

function Book(id, title, author, pages, read) {
  // the constructor...
  this.id = id;
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

  const book = new Book(crypto.randomUUID(), title, author, pages, read);

  myLibrary.push(book);

  let table = document.querySelector(".table");
  

  //needs to change this
  for(let obj of myLibrary){
    let tr = table.insertRow();
    tr.insertCell().textContent = obj.title;
    tr.insertCell().textContent = obj.author;
    tr.insertCell().textContent = obj.pages;
    tr.insertCell().textContent = obj.read;
    tr.insertCell().innerHTML = '<button type="button" class="btn btn-danger btn-sm" onclick="remove()">Remove</button> <button type="button" class="btn btn-success btn-sm" onclick="read()">Read</button>';
  }

  event.preventDefault();
}

function remove(){

}

function read(){

}

