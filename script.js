const mes = document.querySelector('#mes');
const dias = document.querySelector('#dias');
const horas = document.querySelector('#horas');
const resp = document.querySelector('#resposta');

function calcule() {
    let valor = (mes.valueAsNumber / dias.valueAsNumber) / horas.valueAsNumber
    resp.textContent = valor;
}