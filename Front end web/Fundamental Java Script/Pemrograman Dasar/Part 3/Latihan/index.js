var jumlahAngkot = 10;
var angkotBeroperasi = 4;
var noAngkot = 1; //tentukan nilai awal

while(noAngkot <= angkotBeroperasi) {
  console.log('Angkot No. ' + noAngkot + ' sedang beroperasi');
  noAngkot++;
}
for(var i = angkotBeroperasi + 1; i <= jumlahAngkot; i++) {
  console.log('Angkot No. ' + i + ' Tidak beroperasi');
}