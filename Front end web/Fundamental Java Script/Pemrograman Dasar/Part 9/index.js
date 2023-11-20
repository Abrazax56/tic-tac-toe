//function
function tambah () {
  var hasil = 0;
  for (let i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }
  return hasil;
}
//function kali (a, b) {
  //return a ** b;
//}

var coba = tambah(1,2,5,90);
console.log(coba);