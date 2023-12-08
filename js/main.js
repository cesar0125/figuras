/*var cuando es global fuera de cualquier funcion*/
var figura =document.getElementById("figura");

function circulo(){
    figura.classList.toggle("circulo");
}

function moveTop(){
    figura.classList.toggle("moveTop");
}


function rectangulo(){
    figura.classList.toggle("rectangulo");
}

function rombo(){
    figura.classList.toggle("rombo");
}

function imagen(){
    figura.classList.toggle("imagen");
}

function gif(){
    figura.classList.toggle("gif");
}

function triangulo(){
    figura.classList.toggle("triangulo");
}

function huevo(){
    figura.classList.toggle("huevo");
}

function pacMan(){
    figura.classList.toggle("pacMan");
}

function luna(){
    figura.classList.toggle("luna");
}

function hoja(){
    figura.classList.toggle("hoja");
}

function mostrarPanelLateral() {
    const panelLateral = document.querySelector('.panel-lateral');
    panelLateral.classList.toggle('active');
}

function cerrarPanelLateral() {
    const panelLateral = document.querySelector('.panel-lateral');
    panelLateral.classList.remove('active');
}

function trapecio(){
    figura.classList.toggle("trapecio");
}

function moveLeft(){
    figura.classList.toggle("moveLeft");
}

function moveBottom(){
    figura.classList.toggle("moveBottom");
}

function moveRight(){
    figura.classList.toggle("moveRight");
}

function estrella() {
    figura.classList.toggle("estrella");
}

function pentagono() {
    figura.classList.toggle("pentagono");
}
function ranura() {
    figura.classList.toggle("ranura");
}

function hexagono() {
    figura.classList.toggle("hexagono");
}

function octogono() {
    figura.classList.toggle("octogono");
}


function mostrarPanelSuperior() {
    const panelSuperior = document.querySelector('.panel-superior');
    panelSuperior.classList.toggle('active');
}

function cerrarPanelSuperior() {
    const panelSuperior = document.querySelector('.panel-superior');
    panelSuperior.classList.remove('active');
}

function mostrarPanelDerecho() {
    const panelDerecho = document.querySelector('.panel-derecho');
    panelDerecho.classList.toggle('active');
}

function cerrarPanelDerecho() {
    const panelDerecho = document.querySelector('.panel-derecho');
    panelDerecho.classList.remove('active');
}

function mostrarPanelInferior() {
    const panelInferior = document.querySelector('.panel-inferior');
    panelInferior.classList.toggle('active');
}

function cerrarPanelInferior() {
    const panelInferior = document.querySelector('.panel-inferior');
    panelInferior.classList.remove('active');
}