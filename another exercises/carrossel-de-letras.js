// Carrossel de Letras:

// O objetivo desse exercício é fazer com que as letras fiquem girando, de tal forma que a última letra da palavra anterior seja a primeira letra da palavra seguinte;

// As palavras formadas devem possuir sempre as mesmas letras que a palavra original;

// O objetivo é fazer com que todas as letras girem até formar novamente a palavra original;

function carrosselDeLetras(str) {

  str = str.split('');

  let teste = "";
  let n = 0;
  let output = ["carrossel"];

  while (n < str.length) {

    teste += str[str.length - 1];

    for (let i = 0; i < str.length - 1; i++) {
      teste += str[i];
    }

    str = teste.split("")
    output.push(teste);
    n += 1;
    teste = "";

  }

  return output;

}

console.log(carrosselDeLetras("carrossel"))