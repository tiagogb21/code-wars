function disemvowel(str) {
  let vowel = "aeiouAEIOU";
  let output = "";
  for (let i = 0; i < str.length; i += 1) {
    if (vowel.indexOf(str[i]) === -1) {
      output += str[i];
    }
  }
  return output;
}

console.log(disemvowel("This website is for losers LOL!"));
