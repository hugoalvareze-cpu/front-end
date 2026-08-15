const solicitarNota = (materia, numero) => {
    const entrada = prompt(`Ingrese la Nota ${numero} de ${materia}`);
    return parseFloat(entrada?.replace(',', '.') || '0'); // Si tiene decimales, tomalos en cuenta, y si no existe valor, agrega un 0
};

const html1 = document.querySelector('#HTML1');
const html2 = document.querySelector('#HTML2');
const html3 = document.querySelector('#HTML3');
const htmlPromedio = document.querySelector('#HTMLPromedio');

const CSS1 = document.querySelector('#CSS1');
const CSS2 = document.querySelector('#CSS2');
const CSS3 = document.querySelector('#CSS3');
const CSSPromedio = document.querySelector('#CSSPromedio');


const JAVASCRIPT1 = document.querySelector('#JAVASCRIPT1');
const JAVASCRIPT2 = document.querySelector('#JAVASCRIPT2');
const JAVASCRIPT3 = document.querySelector('#JAVASCRIPT3');
const JAVASCRIPTPromedio = document.querySelector('#JAVASCRIPTPromedio');


const nota1HTML = solicitarNota('HTML', 1);
const nota2HTML = solicitarNota('HTML', 2);
const nota3HTML = solicitarNota('HTML', 3);

const nota1CSS = solicitarNota('CSS', 1);
const nota2CSS = solicitarNota('CSS', 2);
const nota3CSS = solicitarNota('CSS', 3);

const nota1JAVASCRIPT = solicitarNota('JAVASCRIPT', 1);
const nota2JAVASCRIPT = solicitarNota('JAVASCRIPT', 2);
const nota3JAVASCRIPT = solicitarNota('JAVASCRIPT', 3);

html1.textContent = nota1HTML;
html2.textContent = nota2HTML;
html3.textContent = nota3HTML;
htmlPromedio.textContent = ((nota1HTML + nota2HTML + nota3HTML) / 3).toFixed(2);

CSS1.textContent = nota1CSS;
CSS2.textContent = nota2CSS;
CSS3.textContent = nota3CSS;
CSSPromedio.textContent = ((nota1CSS + nota2CSS + nota3CSS) / 3).toFixed(2);


JAVASCRIPT1.textContent = nota1JAVASCRIPT;
JAVASCRIPT2.textContent = nota2JAVASCRIPT;
JAVASCRIPT3.textContent = nota3JAVASCRIPT;
JAVASCRIPTPromedio.textContent = ((nota1JAVASCRIPT + nota2JAVASCRIPT + nota3JAVASCRIPT) / 3).toFixed(2);


