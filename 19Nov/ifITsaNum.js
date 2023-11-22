function isDigit(s) {
    //your code
  return !isNaN(parseFloat(s)) && isFinite(s);
  }