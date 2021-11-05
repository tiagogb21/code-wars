var number = function (busStops) {
  let sum = 0;
  busStops.map((value) => (sum += value[0] - value[1]));
  return sum;
};
