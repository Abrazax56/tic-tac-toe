//PENGELOLAAN ANGKOT
function Angkot (sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;
  
  this.tambahPenumpang = function(namaPenumpang) {
    if (this.penumpang.length == 0) {
      this.penumpang.push(namaPenumpang);
      return this.penumpang;
    } else {
      for (let i = 0; i < this.penumpang.length; i++) {
        if (this.penumpang[i] == undefined) {
          this.penumpang[i] = namaPenumpang;
          return this.penumpang;
        } else if (this.penumpang[i] == namaPenumpang) {
          console.log(namaPenumpang + ' sudah ada di angkot');
          return this.penumpang
        } else if(i == this.penumpang.length - 1) {
          this.penumpang.push(namaPenumpang);
          return this.penumpang;
        }
      }
    }
  };
  this.hapusPenumpang = function (namaPenumpang, bayar) {
    if (this.penumpang.length == 0) {
      console.log('angkot masih kosong');
      return this.penumpang;
    } else { 
      for (let i = 0; i < this.penumpang.length; i++) {
        if (this.penumpang[i] === namaPenumpang) {
          this.penumpang.splice(i, 1, undefined);
          this.kas += bayar;
          return this.penumpang;
        }
      }
      if (this.penumpang != namaPenumpang) {
        console.log(namaPenumpang + ' tidak ada didalam angkot');
      }
      return this.penumpang;
    }
  }
  
}

var angkot = {};
var tambahAngkot = function(namaAngkot, nama, trayek1, trayek2) {
  var tambah = new Angkot(nama, [trayek1, trayek2], [], 0);
  angkot.angkot = tambah;
  return tambah;
};