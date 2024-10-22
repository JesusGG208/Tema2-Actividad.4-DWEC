let names = [];

const inputName = document.getElementById('inputName');
const addBtn = document.getElementById('addBtn');
const nameList = document.getElementById('nameList');
const randomBtn = document.getElementById('randomBtn');

function renderNameList() {
    nameList.innerHTML = '';

    names.forEach((name, index) => {
        const li = document.createElement('li');
        li.textContent = name;
        li.id = 'name-' + index;
        nameList.appendChild(li);
    });
}

addBtn.addEventListener('click', () => {
    const name = inputName.value.trim();

    if (name !== '') {
        names.push(name);
        renderNameList();
        inputName.value = '';
    } else {
        alert('Por favor, inserta un nombre.');
    }
});

randomBtn.addEventListener('click', () => {
    if (names.length === 0) {
        alert('No hay nombres en la lista para seleccionar.');
        return;
    }

    const prevSelected = document.querySelector('.selected');
    if (prevSelected) {
        prevSelected.classList.remove('selected');
    }

    const randomIndex = Math.floor(Math.random() * names.length);
    const selectedName = document.getElementById('name-' + randomIndex);
    selectedName.classList.add('selected');

    alert('El nombre seleccionado es: ' + names[randomIndex]);
});