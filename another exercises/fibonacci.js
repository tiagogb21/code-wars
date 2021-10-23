const fib = (steps) => {

  if (steps === 0) return 0;

  let output = [];

  for (let i = 0; i <= steps; i++) {

    if (i === 0 || i === 1) {
      output.push(1);
    }
    else {
      let sum = output[i - 1] + output[i - 2];
      output.push(sum);
    }

  }

  return output[steps - 1];

}