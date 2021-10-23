function doubleChar(str) {
  str = str.split("");
  let double = str.map((value) => value.repeat(2));
  return double.join("");
}

// to double how many times we want:

function doubleCharN(str, n) {
  str = str.split("");
  let double = str.map((value) => value.repeat(n));
  return double.join("");
}

console.log(doubleCharN("javascript", 4))