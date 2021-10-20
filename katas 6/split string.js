// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

function solution(str) {

  let cont = "";
  let output = [];

  for (let i = 0; i < str.length; i += 1) {

    if (i === str.length - 1 && cont === "") {
      cont += str[i] + "_"
    }

    else if (cont.length <= 2) {
      cont += str[i];
    }

    if (cont.length === 2) {
      output.push(cont);
      cont = "";
    }

  }

}