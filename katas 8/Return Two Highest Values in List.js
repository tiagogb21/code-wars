// In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

// The result should also be ordered from highest to lowest.

function twoHighest(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let output = Array.from(new Set(arr));
  output.sort((a, b) => b - a);
  return [output[0], output[1]]
}