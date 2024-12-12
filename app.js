//Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

// Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado:
function exibirMensagem() {
    console.log('O botão foi clicado!')
}

// Crie uma função que exiba no console a mensagem Eu amo Js sempre que o botão Console for pressionado.
function exibirAlerta() {
    alert('Eu amo Js')
}

// Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você:
function exibirPrompt() {
    let nomeDaCidade = prompt('Digite o nome de uma cidade do Brasil:')
    alert(`Estive em ${nomeDaCidade} e lembrei de você`)

// Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta.
function somandoDoisNumeros() {
    let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
    let segundoNumero = parseInt(prompt('Digite o segundo número'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`)