
const productFib = (prod) => {

  if (prod <= 0) return 0;

  let output = [];

  for (let i = 0; i <= prod; i++) {

    if (i === 0 || i === 1) {
      output.push(1);
    }

    else {
      let sum = output[i - 1] + output[i - 2];
      output.push(sum);
    }

    if (output[i] > 2 * Math.trunc(Math.sqrt(prod))) {
      break;
    }

  }

  for (let i = 0; i < output.length; i += 1) {

    if (output[i] * output[i + 1] === prod) {

      return [output[i], output[i + 1], true];

    }

  }

  return [output[output.length - 2], output[output.length - 1], false];

}

console.log(productFib(5895))