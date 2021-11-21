function sumSeparateNumbers(number){
  return number.toString().split('').reduce((acc,curr) => acc + Number(curr),0);
}

function twistedSum(n) {
  let sumNumbers = 0;
  for(let index = 1; index <= n; index += 1) {
    if(index > 9) {
      sumNumbers += sumSeparateNumbers(index);
    } else {
      sumNumbers += index;
    }
  }
  return sumNumbers;
}