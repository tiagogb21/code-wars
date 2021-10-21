function BinaryPyramid(m, n) {
  let store = 0;
  for (let i = m; i <= n; i++) {
    store += parseInt(i.toString(2));
  }
  return store.toString(2);
}