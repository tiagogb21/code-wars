function isPrime(value){
  if(value%2===0) return false;
  for(let i = 3; i <= Math.sqrt(value); i+=2){
    if(value%i===0) return false;
  }
  return true;
}

function step(g, m, n) {
  while (m <= n-g) {
    if(isPrime(m)&&isPrime(m+g)) return [m,m+g];
    m+=1;
  }
  return null;
}