//object literal
// let mahasiswa = {
//   nama : 'beni',
//   umur : 18,
//   alamat : 'cilacap',
//   makan : function(porsi) {
//     this.umur = this.umur + porsi;
//     console.log(`Selamat makan ${this.nama}`);
//   }
// };

//function declaration
// function Mahasiswa (nama, energy) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energy = energy;
//   
//   mahasiswa.makan = function (porsi) {
//     this.energy += porsi;
//     console.log(`Hallo ${this.nama}, selamat makan`);
//   };
//   mahasiswa.main = function (jam) {
//     this.energy -= jam;
//     console.log(`Hallo ${this.nama}, energi berkurang`);
//   };
//   return mahasiswa;
// }
// 
// let beni = Mahasiswa('beni', 10);

//constructor
const methodMahasiswa = {
  makan: function (porsi) {
    this.energy += porsi;
  },
  main: function (jam) {
    this.energy -= porsi;
  },
  tidur: function (jam) {
    this.energy += porsi * 2;
  }
};
function Mahasiswa (nama, energy) {
  let mahasiswa = Object.create(methodMahasiswa);
  mahasiswa.nama = nama;
  mahasiswa.energy = energy;
  
  return mahasiswa;
}

let beni = Mahasiswa('beni', 10);