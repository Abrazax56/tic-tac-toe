var jumlahAngkot = 10;
var noAngkot = 1; //tentukan nilai awal
var angkotBeroperasi = 6;
var angkotLembur = 8;

for (var i = noAngkot; i <= jumlahAngkot; i++) {
  if (i <= angkotBeroperasi && i !== 5) {
    console.log('angkot No. ' + i + ' berjalan dengan baik');
  } else if (i == 8 || i == 10 || i == 5) {
    console.log('angkot No. ' + i + ' sedang lembur');
  } else {
    console.log('angkot No. ' + i + ' sedang di bengkel');
  }
}