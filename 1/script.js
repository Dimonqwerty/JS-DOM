const myForm = document.querySelector('#form');
const input = document.querySelector('#input');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    alert(input.value)
}