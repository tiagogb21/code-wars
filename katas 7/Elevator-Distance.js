function elevatorDistance(array) {
  let sum = 0;
  for (let i = 0; i < array.length - 1; i += 1) {
    sum += Math.abs(array[i] - array[i + 1]);
  }
  return sum;
}
