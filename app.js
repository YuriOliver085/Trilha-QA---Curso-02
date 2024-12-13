// Crie uma função que calcula o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que será recebida como parâmetro:
function calcularIMC(altura, peso){

  let imc = peso / (alturaMetro * alturaMetro);
}

// Crie uma função que calcula o valor do fatorial de um número passado como parâmetro.
function Fatorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  }

  let fatorial = 1;
  for (let i = 2; i <= numero; i++) {
    fatorial *= i;
  }

  return fatorial;
}

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere uma cotação do dólar igual a R$ 4,80.
function converterDolar(valorEmDolar) {
  let cotacaoDolar = 4.80;
  let valorEmReais = valorEmDolar * cotacaoDolar;
  return valorEmReais.toFixed(2);
}

// Crie uma função que mostra na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function calcularArea(altura, largura) {
  let area = altura * largura;
  let perimetro = 2 * (altura + largura);
  
  console.log(`Área da sala: ${area} metros quadrados`);
  console.log(`Perímetro da sala: ${perimetro} metros`);
}

// Crie uma função que mostra na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function calcularAreaCircular(raio) {
  let area = Math.PI * raio * raio;
  let perimetro = 2 * Math.PI * raio;
  
  console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
  console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
}

// Crie uma função que mostra na tela a tabela de um número dado como parâmetro.
function mostrarTabela(numero) {
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }
}