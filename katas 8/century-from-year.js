function century(year) {
  let calcCent = Math.floor(year / 100);
  return year % 100 === 0 ? calcCent : calcCent + 1;
}