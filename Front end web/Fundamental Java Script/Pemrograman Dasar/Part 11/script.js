var tampilAngka = function (n) {
  if (n === 0) {
    return 1;
  }
  return n * tampilAngka(n-1);
};

console.log(tampilAngka(5));