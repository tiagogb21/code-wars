function makeString(s) {
  let output = [];
  s.split(" ").map((value) => output.push(value[0]));
  return output.join("");
}
