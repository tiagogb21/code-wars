function sumTriangularNumbers(n) {
  let x = [];
  let o = [];
  let m = 1;
  for (let i = 0; i < n; i += 1) {
    for (let j = i; j >= 0; j -= 1) {
      x.push(m);
      m += 1;
    }
    o.push(x);
    x = [];
  }
  let sum = 0;
  o.map((value) => (sum += value[value.length - 1]));
  return sum;
}
