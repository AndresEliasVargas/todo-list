'use strict';

const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

// Template
const generateTemplate = todo => {
  const html =  `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="fas fa-pen mr-4 edit"></i>
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

// Filter
const filterTodos = term => {
  // console.log(list.children); // HTML Collection
  // console.log(Array.from(list.children));

  Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.add('filtered'));

  Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove('filtered'));
};

// Search
search.addEventListener('keyup', () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});

// Add Template Edit
const addEditField = (parent) => {
  let template =
    `
      <form class="input-edit text-center my-4">
        <input class="form-control m-auto" type="text" name="edit" placeholder="Edit todo..." />
      </form>
    `
  ;
    
  parent.insertAdjacentHTML('afterend', template);
};

list.addEventListener('click', e => {
  if(e.target.classList.contains('edit')){
    let textToEdit = e.target.previousElementSibling.innerHTML;

    addEditField(e.target.parentElement);

    
    // let valueToEdit = 'test';
    // e.target.previousElementSibling.textContent = textToEdit.replace(textToEdit, valueToEdit);
  }
});