//contoh 1
const tampilNama = nama => `halo ${nama}`; //implisit return
//contoh 2
const tampilUmur = () => 18; //implisit return
//contoh 3
const tampilAlamat = (jalan, rt) => `${jalan} ${rt}`;  //implisit return 
//contoh 4
const tampilHobby = (hobby) => {
  return hobby;
};
//contoh 5
let mahasiswa = ['beni', 'via', 'anu'];
let jumlahHuruf = mahasiswa.map(nama => nama.length);
let jumlahHuruf2 = mahasiswa.map(nama => ({nama : nama, jumlahHuruf : nama.length}));
console.table(jumlahHuruf2);



//THIS PADA ARROW function
const Siswa = function () {
  this.nama = 'Ahmad Beni Rusli';
  this.umur = 19;
  this.sayHello = function () {
    console.log(`Hallo nama saya ${this.nama}, Umur saya ${this.umur}`);
  };
  
  setInterval(() => {
    console.log(this.umur++);
  }, 1);
};
const beni = new Siswa();






//study kasus
const box = document.querySelector('.box');

box.addEventListener("click", function () {
  let satu = 'size';
  let dua = 'caption';
  
  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }
  
  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});






