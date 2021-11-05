function sc(screws) {
  let output = screws.length * 2 - 1;
  for (let i = 0; i < screws.length - 1; i += 1) {
    if (screws[i] !== screws[i + 1]) {
      output += 5;
    }
  }
  return output;
}
console.log(sc("---+++"));
