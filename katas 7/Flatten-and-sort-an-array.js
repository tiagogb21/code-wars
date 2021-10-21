"use strict";

function flattenAndSort(array) {
  let out = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      out.push(array[i][j])
    }
  }
  return out.sort((a, b) => a - b)
}