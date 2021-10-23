function reverseList(list) {
  return reverseArr(list);
}

function reverseArr(arr) {
  let out = [];
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    out.push(arr[i])
  }
  return out;
}