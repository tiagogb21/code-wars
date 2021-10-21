// The odd and even numbers are fighting against each other!

// You are given a list of positive integers. The odd numbers from the list will fight using their 1 bits from their binary representation, while the even numbers will fight using their 0 bits. If present in the list, number 0 will be neutral, hence not fight for either side.

// You should return:

// odds win if number of 1s from odd numbers is larger than 0s from even numbers

// evens win if number of 1s from odd numbers is smaller than 0s from even numbers

// tie if equal, including if list is empty

// Please note that any prefix that might appear in the binary representation, e.g. 0b, should not be counted towards the battle.

// Example:
// For an input list of [5, 3, 14]:

// odds: 5 and 3 => 101 and 11 => four 1s
// evens: 14 => 1110 => one 0
// Result: odds win the battle with 4-

function bitsBattle(numbers) {

  let even = [];
  let odd = [];

  // separating the odd and even numbers

  numbers.map((value) => value % 2 === 0 ? even.push(value) : odd.push(value));

  let evenBit = [];
  let oddBit = [];

  let contOdd = 0;
  let contEven = 0;

  // turning odd numbers into binaries:

  odd.map((value) => oddBit.push(value.toString(2)));
  oddBit = oddBit.toString().replace(",", "");
  oddBit = oddBit.split('');

  // cont the number 1 of the list:

  oddBit.map((value) => value === '1' ? contOdd++ : "");

  // turning odd numbers into binaries:

  even.map((value) => evenBit.push(value.toString(2)));
  evenBit = evenBit.toString().replace(",", "")
  evenBit = evenBit.split('');

  // cont the number 1 of the list:

  evenBit.map((value) => value === '0' ? contEven++ : "");

  return contOdd > contEven ? 'odds win' : contOdd < contEven ? 'even win' : 'tie';

}