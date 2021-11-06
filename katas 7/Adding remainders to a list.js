function math(value, div) {
  return 2 * value - Math.floor(value / div) * div;
}

function solve(nums, div) {
  console.log(math(nums[0], div));
  return nums.map((value) => math(value, div));
}
