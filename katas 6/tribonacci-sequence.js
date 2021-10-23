function tribonacci(signature, n) {
  let sum = 0;
  if (n <= 3) return signature.slice(0, n);
  for (let i = 3; i < n; i++) {
    sum = signature[i - 3] + signature[i - 2] + signature[i - 1]
    signature.push(sum)
  }
  return signature;
}