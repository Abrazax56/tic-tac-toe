//membuat function
function volumeKubus(sisi) {
  return sisi ** 3;
}
//--//

var repeat = true;
while(repeat) {
  alert('MASUKAN DUA BUAH SISI KUBUS UNTUK MENJUMLAHKAN DUA VOLUME KUBUS');
  var userInput = prompt('masukan sisi kubus pertama (cm)');
  var userInput2 = prompt('masukan sisi kubus ke dua (cm)');
  
  //menjalankan function//
  var resultUser = volumeKubus(userInput) + volumeKubus(userInput2);
  //--//
  
  //menampilkan function pada halaman
  var resultInput = alert('HASILNYA ADALAH : ' + resultUser + ' CM³');
  //--//
  
  repeat = confirm('Ingin menghitung lagi?');
}
alert('terimakasih');