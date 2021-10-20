// An array is called zero-plentiful if it contains at least one 0 and every sequence of 0s is of length at least 4. Your task is to return the number of zero sequences if the given array is zero-plentiful else 0.

function zeroPlentiful(arr) {

  console.log(arr)

  let result = 0;
  let count = 0;

  if (arr.some((value) => value === 0)) {

    for (let i = 0; i < arr.length; i++) {

      if (arr[i] === 0 && arr[i + 1] !== 0) {
        return 0;
      }

      while (arr[i] === 0) {

        count++;
        i++;

      }

      if (count >= 4) {

        result++

      }

      count = 0;

    }

    return result;

  }

  return 0;

}