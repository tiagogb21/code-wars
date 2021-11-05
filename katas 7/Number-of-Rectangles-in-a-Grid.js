function numberOfRectangles(m, n) {
  let sum = 0;
  let t = 0;
  for (let i = 1; i <= m; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      t += i * j;
    }
    sum += t;
    t = 0;
  }
  return sum;
}

console.log(numberOfRectangles(3, 2));
