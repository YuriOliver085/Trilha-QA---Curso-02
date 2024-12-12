// Criar uma função que exibe "Olá, mundo!" no console.
function exibir() {
    console.log("Olá, mundo!");
  }
  exibir();

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console. 
function exibirNome(nome) {
    console.log(`Olá, ${nome}!`);
  }
  exibirNome("Yuri");

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function calcularDobro(numero) {
    return numero * 2;
  }
  
  let resultado = calcularDobro(7);
  console.log(resultado);

// Criar uma função que recebe três números como parâmetros e retorna a média deles.
function calcularMediaMedia(a, b, c) {
    return (a + b + c) / 3;
  }
  
  let media = calcularMedia(5, 7, 13);
  console.log(media);

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maior(a, b) {
    return a > b ? a : b;
  }
  
  let maiorNumero = maior(8, 10);
  console.log(maiorNumero);

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.
function multiplicarPorSi(numero) {
    return numero * numero;
  }
  
  let resultado1 = multiplicarPorSi(2);
  console.log(resultado1); 