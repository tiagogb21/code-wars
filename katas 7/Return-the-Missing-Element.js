function getMissingElement(superImportantArray) {
  superImportantArray.sort();
  for (let index = 0; index < 10; index++) {
    if (index !== superImportantArray[index]) {
      return index;
    }
  }
}