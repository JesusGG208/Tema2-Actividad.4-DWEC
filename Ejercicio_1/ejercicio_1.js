const frasesFrikisInformatica = [
    "¿Qué es un terapeuta de software? Alguien que borra tus bugs.",
    "El hardware es lo que puedes patear, el software es lo que solo puedes maldecir.",
    "Un buen programador es alguien que siempre mira a ambos lados antes de cruzar una calle de un solo sentido.",
    "Si al principio no tienes éxito, llama a la función recursiva.",
    "En informática, no hay errores, solo características no documentadas."
];

function mostrarFraseAleatoria() {

    const indiceAleatorio = Math.floor(Math.random() * frasesFrikisInformatica.length);

    const elementoTexto = document.getElementById("texto-informatica");

    elementoTexto.textContent = frasesFrikisInformatica[indiceAleatorio];
}

document.getElementById("ver-mas-boton").addEventListener("click", mostrarFraseAleatoria);