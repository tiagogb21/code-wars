function tArea(tStr) {
  tStr = tStr.split("\n");
  tStr = tStr[tStr.length - 2].split(" ");
  return (tStr.length - 1) ** 2 / 2;
}
