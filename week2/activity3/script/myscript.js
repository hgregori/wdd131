const input = document.querySelector('#favchap'); 
const button = document.querySelector('button');
const list = document.querySelector('#list');

const li = document.createElement('li');
const deleteBtn = document.createElement('button');

li.innerHTML = input.value;
deleteBtn.innerHTML = '❌';

input.value = '';

deleteBtn.addEventListener('click', function() {
    list.removeChild(li);
    input.value = '';
});

li.appendChild(deleteBtn);
list.appendChild(li);

    if (input.value !== '') 