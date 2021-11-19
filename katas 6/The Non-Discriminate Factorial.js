function factorial(n) {
  if(n===0) return 1;
  let a = Math.abs(n);
  let factorial = 1;
  for(let i = 1; i<a; i+=1){
    factorial *= i;
  }
  return n % 2 !== 0 ? factorial*n : factorial*a;
}