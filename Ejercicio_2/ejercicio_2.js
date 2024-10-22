const frasesFrikisInformatica = [
    "¿Qué es un terapeuta de software? Alguien que borra tus bugs.",
    "El hardware es lo que puedes patear, el software es lo que solo puedes maldecir.",
    "Un buen programador es alguien que siempre mira a ambos lados antes de cruzar una calle de un solo sentido.",
    "Si al principio no tienes éxito, llama a la función recursiva.",
    "En informática, no hay errores, solo características no documentadas."
];

const colores = [
    "#ff0000", // Rojo
    "#00ff00", // Verde
    "#0000ff", // Azul
    "#ff00ff", // Magenta
    "#00ffff", // Cyan
    "#ff8000", // Naranja
    "#8000ff", // Morado
    "#00ff80", // Verde claro
    "#ff0080", // Rosa
    "#80ff00", // Verde lima
    "#0080ff", // Azul claro
    "#ffbf00", // Amarillo oscuro
    "#bf00ff", // Violeta oscuro
    "#00ffbf", // Turquesa
    "#bf00ff", // Púrpura
    "#00bfff", // Azul claro
    "#ff00bf", // Magenta oscuro
    "#80ff80", // Verde claro pastel
    "#ff80ff", // Rosa pastel
    "#80ffff"  // Cian claro
];

function mostrarFraseYColorAleatorio() {
    
    const indiceFraseAleatorio = Math.floor(Math.random() * frasesFrikisInformatica.length);
    
    const indiceColorAleatorio = Math.floor(Math.random() * colores.length);
    
    const elementoTexto = document.getElementById("texto-informatica");
    
    elementoTexto.textContent = frasesFrikisInformatica[indiceFraseAleatorio];
    
    const colorAleatorio = colores[indiceColorAleatorio];
    elementoTexto.style.color = colorAleatorio;
    document.getElementById("ver-mas-boton").style.backgroundColor = colorAleatorio;
}

document.getElementById("ver-mas-boton").addEventListener("click", mostrarFraseYColorAleatorio);