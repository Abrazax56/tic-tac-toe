// function penjumlahan (a, b) {
//   return [a + b, a - b, a / b, a * b];
// }
// 
// const [jumlah, kurang, bagi, kali] = penjumlahan(2, 3);
// console.log(jumlah);
// console.log(kali);

// function penjumlahan (a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b,
//     pangkat: a ** b
//   };
// }
// 
// const {tambah, kurang, bagi, kali, pangkat} = penjumlahan(2, 3);
// console.log(pangkat);
// console.log(kali);

//Destructuring function arguments
const warga = {
  nama: 'beni',
  umur: 35,
  no: 4567,
  alamat: {
    rt: 3,
    rw: 5,
    dusun: 'nusadadi',
    desa: 'tinggarjaya',
    jalan: {
      nomor: 25,
      namaJalan: 'Ahmad Yani',
      km: 4
    }
  }
};

function printNameOnConsole({ nama, umur, no, alamat: {desa, jalan: {namaJalan}}}) {
  return `halo nama saya ${nama} umur saya ${umur} no saya ${no} saya tinggal didesa ${desa} di jalan ${namaJalan}`;
}

let anu = printNameOnConsole(warga);
console.log(anu);