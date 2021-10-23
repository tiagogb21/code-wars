
function onesCounter(input) {
  let count = 0;
  let output = [];
  for (let index = 0; index < input.length; index++) {
    if (input[index] === 1) {
      while (input[index] === 1) {
        count++;
        index++;
      }
      output.push(count);
    }
    count = 0;
  }
  if (output.length === 0) {
    return [];
  }
  return output;
}