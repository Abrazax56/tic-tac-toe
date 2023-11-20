var bintang = '';
bintang += '\n';
for (let i = 0; i < 15; i++) {
  for(let a = 15; a > i; a--) {
    bintang += '0';
  }
  for(let b = 0; b < i; b++) {
    bintang += '1';
  }
  for(let c = 0; c < i; c++) {
    bintang += '1';
  }
  for(let d = 15; d > i; d--) {
    bintang += '0';
  }
  bintang += '\n';
}
for (let i = 15; i > 0; i--) {
  for(let a = 15; a > i; a--) {
    bintang += '0';
  }
  for(let b = 0; b < i; b++) {
    bintang += '1';
  }
  for(let c = 0; c < i; c++) {
    bintang += '1';
  }
  for(let d = 15; d > i; d--) {
    bintang += '0';
  }
  bintang += '\n';
}
console.log(bintang);
