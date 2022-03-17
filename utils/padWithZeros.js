function padWithZeros(number, length = 2) {
  let string = "" + number;
  while (string.length < length) {
    string = "0" + string;
  }

  return string;
}

export default padWithZeros