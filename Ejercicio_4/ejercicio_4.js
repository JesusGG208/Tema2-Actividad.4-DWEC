const box = document.getElementById('box');
const toggleBtn = document.getElementById('toggleBtn');

function toggleBox() {
    
    if (box.style.display === 'none') {

        box.style.display = 'block';

        toggleBtn.textContent = 'Ocultar Caja';
    } else {

        box.style.display = 'none';

        toggleBtn.textContent = 'Mostrar Caja';
    }
}

toggleBtn.addEventListener('click', toggleBox);