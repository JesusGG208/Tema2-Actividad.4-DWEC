const newItemInput = document.getElementById('newItemInput');
const addItemBtn = document.getElementById('addItemBtn');
const itemsList = document.getElementById('itemsList');

function addItem() {

    const newItemText = newItemInput.value.trim();

    if (newItemText === '') {
        alert('Por favor, ingresa un ítem.');
        return;
    }

    const li = document.createElement('li');
    li.textContent = newItemText;

    const completeBtn = document.createElement('button');
    completeBtn.innerHTML = '<span class="material-icons">check_circle</span>';
    completeBtn.classList.add('completeBtn');

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<span class="material-icons">delete</span>';
    deleteBtn.classList.add('deleteBtn');

    completeBtn.addEventListener('click', function () {
        li.classList.toggle('completed');  
    });

    deleteBtn.addEventListener('click', function () {
        li.remove();  
    });

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    itemsList.appendChild(li);

    newItemInput.value = '';
}

addItemBtn.addEventListener('click', addItem);

newItemInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addItem();
    }
});