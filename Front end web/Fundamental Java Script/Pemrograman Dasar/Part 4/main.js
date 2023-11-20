var angka = prompt('masukan angka :');


if(angka % 2 === 0) {
  alert(angka + ' adalah bilangan genap');
} else if (angka % 2 == 1 ) {
  alert(angka + ' adalah bilangan ganjil');
} else {
  alert(angka + ' bukan termasuk angka');
}