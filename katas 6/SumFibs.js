function sumFibs(n) {
	let previousNumber = 0;
  let nextNumber = 1;
  let step = previousNumber + nextNumber;
  let fibonacciArray = [];
  while(fibonacciArray.length !== n + 1){
    fibonacciArray.push(previousNumber);
    previousNumber = nextNumber;
    nextNumber = step;
    step = previousNumber + nextNumber;
  }
  return fibonacciArray.reduce((acc, curr) => curr % 2 === 0 ? acc + curr : acc)
};