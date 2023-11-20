/*var dataSiswa = {
  nama : 'beni',
  hobi : 'renang'
};
dataSiswa.alamat = function () {
  console.log(this);
  console.log('nusadadi');
}
dataSiswa.alamat();*/ //this mengembalikan object yg bersangkutan 

//consturctor
function Halo () {
  console.log(this);
  console.log('halo');
}
var obj1 = new Halo();
var obj2 = new Halo();

/*var mhs = {
  nama : 'beni',
  umur: 18
};*/
//function declaration
/*function mahasiswa() {
  console.log(this);
  console.log('halo');
}

this.mahasiswa();*/

//constructor   
/*function Mahasiswa(nama, nrp, email, jurusan) {
  this.nama = nama;
  this.nrp = nrp;
  this.email = email;
  this.jurusan = jurusan;
}
var mhs4 = new Mahasiswa('ema', 88888, 'gmsil', 'nuklir');*/
//this
//var a = 10;
//console.log(this.a);