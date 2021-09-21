'use strict';

const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

// Template
const generateTemplate = todo => {
  const html =  `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
  `;

  list.innerHTML += html;
};

// Add todos
addForm.addEventListener('submit', e => {
  e.preventDefault();

  // trim() in order to avoid spaces before or after
  const todo = addForm.add.value.trim();

  if(todo.length){
    generateTemplate(todo);
    // clear the input
    addForm.reset();
  }

});

// Delete todos
list.addEventListener('click', e => {
  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
  }
});