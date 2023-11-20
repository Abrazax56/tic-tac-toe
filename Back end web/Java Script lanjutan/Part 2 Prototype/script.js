//prototype
// function Mahasiswa (nama, health) {
//   this.nama = nama;
//   this.health = health;
// }
// Mahasiswa.prototype.makan = function (porsi) {
//   this.health += porsi;
// };
// Mahasiswa.prototype.main = function (jam) {
//   this.health -= jam;
// };
// Mahasiswa.prototype.tidur = function (jam) {
//   this.health += jam * 2;
// };
// let beni = new Mahasiswa('beni', 10);

class Mahasiswa{
  constructor(nama, energi){
    this.nama = nama;
    this.energi = energi;
  }
  makan(porsi) {
    this.energi += porsi;
  }
}
let beni = new Mahasiswa('beni', 10);