//var angka = prompt('masukan angka');
var item = prompt('masukan nama makanan / minuman \n (cth: nasi, daging, susu, hamburger, softdrink)')

/*if(angka == 1) {
  alert('anda memasukan angka 1');
} else if (angka == 2) {
  alert('anda memasukan angka 2');
} else {
  alert('none');
}*/

switch (item) {
  case 'nasi' :
  case 'daging' :
  case 'susu' :
    alert('makanan / minuman Sehat!');
    break;
  case 'hamburger' :
  case 'softdrink' :
    alert('makanan / minuman Tidak Sehat!');
    break;
  default :
    alert('makanan / minuman tidak ada!');
    break;
}