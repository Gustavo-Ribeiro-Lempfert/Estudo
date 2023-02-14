const inputElement = document.getElementById('tarefa')
const buttonElement = document.getElementById('add')
const ulElement = document.querySelector('ul')

buttonElement.onclick = ev => {
ev.preventDefault();

if (inputElement.value) {
    const texteElement = document.createElement('span')
    texteElement.innerHTML = inputElement.value;

    const btnElement = document.createElement('button')

    btnElement.innerHTML = 'remover';


    const liElement = document.createElement('li');
    liElement.appendChild(texteElement);
    liElement.appendChild(btnElement);

    btnElement.onclick = () => {
        ulElement.removeChild(liElement);
    }

    ulElement.appendChild(liElement);
    inputElement.value = '';
    }
};
