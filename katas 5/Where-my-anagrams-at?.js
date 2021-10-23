function anagrams(word, words) {
  word = word.split('').sort().join('');
  return words.filter(value => reorganize(value) === word);
}

function reorganize(str) {
  return str.split('').sort().join('');
}

