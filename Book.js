let myLibrary = JSON.parse(localStorage.getItem('myLibrary')) || [
    {
    id: crypto.randomUUID(),
    title: 'Clean Code',
    author: 'Robert Cecil Martin',
    pages: 464,
    finished: false
  },
  {
    id: crypto.randomUUID(),
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki',
    pages: 336,
    finished: false
  },
  {
    id: crypto.randomUUID(),
    title: 'Atomic Habits',
    author: 'James Clear',
    pages: 320,
    finished: true
  }
];

function saveToLocalStorage(){
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

function Book() {
  let tableHTML = '';

  myLibrary.forEach((book) => {
    tableHTML += `
    <tr>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td>
        <input type="checkbox" class="btn-check btn-sm" id="btncheck-${book.id}" autocomplete="off" ${book.finished ? 'checked' : ''} onchange="toggleReadStatus('${book.id}')">
        <label class="btn btn-outline-success btn-sm" for="btncheck-${book.id}">✓</label>
      </td>
      <td>
      <button type="button" class="btn btn-danger btn-sm delete-btn" data-book-id="${book.id}">Delete</button>
      </td>
    </tr>
    `;
  });
  
  document.querySelector('.table-datas').innerHTML = tableHTML;

  document.querySelectorAll('.delete-btn')
  .forEach((button) => {
    button.addEventListener('click', () => {
      const bookId = button.dataset.bookId;
      console.log(bookId);
      removeFromLibrary(bookId);
      Book();
    });
  });
}
Book();

function addBookToLibrary() {
  if (!title.value || !author.value || isNaN(pages.value) || pages.value < 1) {
    alert('Please fill in all fields correctly.');
    return;
  }

  const book = {
    id: crypto.randomUUID(),
    title: document.getElementById('title').value,
    author: document.getElementById('author').value,
    pages: Number(document.getElementById('pages').value),
    finished: document.getElementById('read').checked
    }
  
  const modalElement = document.getElementById('exampleModal'); 
  const modal = bootstrap.Modal.getInstance(modalElement);
  modal.hide();
  
  myLibrary.push(book);
  saveToLocalStorage();
  clearInputs();
  Book();
}

function toggleReadStatus(bookId){
  myLibrary.forEach((book) => {
    if(book.id === bookId){
      book.finished = !book.finished;
      saveToLocalStorage();
      Book();
    }
  });
}

function removeFromLibrary(bookId) {
  const newLibrary = [];

  myLibrary.forEach((book) => {
      if (book.id !== bookId) {
          newLibrary.push(book);
      }
  });

  myLibrary = newLibrary;
  saveToLocalStorage();
}

function clearInputs(){
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('pages').value = '';
  document.getElementById('read').checked = false;
}

const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const title = document.querySelector('.title');
const table = document.querySelector('.table');

toggleBtn.addEventListener('click', () => {
  let currentTheme = body.getAttribute('data-bs-theme') || 'dark';
  console.log(currentTheme);
  if (currentTheme === 'dark') {
    body.setAttribute('data-bs-theme', 'light');
    toggleBtn.textContent = '☽ Dark Mode';
    localStorage.setItem('theme', 'light');
    title.classList.remove('text-light');
    title.classList.add('text-dark');
    table.classList.add('table-success');
  } 
  else {
    body.setAttribute('data-bs-theme', 'dark');
    toggleBtn.textContent = '☀ Light Mode';
    localStorage.setItem('theme', 'dark');
    title.classList.remove('text-dark');
    title.classList.add('text-light');
    table.classList.remove('table-success');
  }
});