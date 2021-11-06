function solve(s) {
  let vowels = "aeiou";
  let count = 1;
  let out = [];
  for (let i = 0; i < s.length; i += 1) {
    while (vowels.indexOf(s[i]) > -1 && vowels.indexOf(s[i + 1]) > -1) {
      count += 1;
      i += 1;
    }
    out.push(count);
    count = 1;
  }
  return out.sort((a, b) => b - a)[0];
}
