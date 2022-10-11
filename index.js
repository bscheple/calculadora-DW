let visor = document.getElmentById(`visor`);
let valor_salvo = null;
let operador_salvo

let btnNumeros = document.getElmentByClassName(`Botão-numero`);
for (let botao of btnNumeros) {
    botao.addEventListener("click", clica_numero);
}
