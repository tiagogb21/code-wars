function isPrime(value){
  if(value%2===0) return false;
  for(let i = 3; i <= Math.sqrt(value); i+=2){
    if(value%i===0) return false;
  }
  return true;
}
function prime(n) {
  let m = 3;
  let prime = [2];
  while (m <= n) {
    if(isPrime(m)) prime.push(m);
    m+=1;
  }
  return prime;
}