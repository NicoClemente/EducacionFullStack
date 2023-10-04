let colores = ["red", "green", "blue", "black"];
let colorInput = "";

const mainElement = document.querySelector("main");
const h2Element = document.querySelector("main > #color");
const colorPrevButton = document.getElementsByTagName('button')[0];
const colorNextButton = document.getElementsByTagName('button')[1];
const addColorButton = document.getElementsByTagName('button')[2];
let colorIndex = 0;

const cambiarColorFondo = () => {
    mainElement.style.backgroundColor = colores[colorIndex];
    h2Element.textContent = colores[colorIndex].charAt(0).toUpperCase() + colores[colorIndex].slice(1);
};

colorPrevButton.addEventListener("click", () => {
    colorIndex = (colorIndex - 1 + colores.length) % colores.length;
    cambiarColorFondo();
});

colorNextButton.addEventListener("click", () => {
    colorIndex = (colorIndex + 1) % colores.length;
    cambiarColorFondo();
});

addColorButton.addEventListener("click", () => {
    const nuevoColor = prompt("Por favor, ingresa un nuevo color:");
    if (nuevoColor) {
        colores.push(nuevoColor.toLowerCase());
        cambiarColorFondo();
    }
});