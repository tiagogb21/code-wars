function nthFibo(steps) {

  if (steps === 0) return 0;

  let output = [0];

  for (let i = 1; i <= steps; i++) {

    if (i === 1 || i === 2) {
      output.push(1);
    }
    else {
      let sum = output[i - 1] + output[i - 2];
      output.push(sum);
    }

  }

  return output[steps - 1];

}