// const title = document.querySelector('#main-heading');
// title.style.color = 'red';

const ul = document.querySelector('ul');
const li = document.createElement('li');

ul.append(li);
li.style.color = 'red';
li.innerText = 'X-men';
li.setAttribute('class', 'list-group-item');
li.removeAttribute('class');