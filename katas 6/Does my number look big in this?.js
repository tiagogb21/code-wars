function narcissistic(value) {
  let valueToString = value.toString();
  let valueLength = valueToString.length;
  let totalSum = 0;
  for(let i = 0; i < valueLength; i+=1){
    totalSum += valueToString[i]**valueLength;
  }
  return totalSum === value;
}