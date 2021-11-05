function getCount(str) {
  var vowelsCount = 0;

  str = str.split("");

  let vowels = "aeiou";

  str.map((value) => (vowels.indexOf(value) > -1 ? (vowelsCount += 1) : ""));

  return vowelsCount;
}
