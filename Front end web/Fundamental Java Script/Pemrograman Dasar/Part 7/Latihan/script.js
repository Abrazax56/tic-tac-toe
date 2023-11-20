//loop
var repeat = true;
while (repeat) {
  //user input
  var userInput = prompt('TEBAK ANGKA TERSEMBUNYI\n\nSilahkan Pilih Angka 1 -10');
  //computer input
  var computerInput = Math.floor(Math.random() * 10 + 1);
  //logic
  if(userInput == computerInput) {
    alert('kamu betul! jawabanya adalah : ' + computerInput);
  } else if (userInput > 10) {
    alert('angka melampaui batas');
  } else if (userInput == '') {
    alert('kamu tidak memasukan angka');
  } else if (userInput == 0) {
    alert('nol tidak di ikut sertakan');
  } else if (userInput < computerInput) {
    alert('jawaban kamu salah! jawabanya adalah : ' + computerInput);
  } else if (userInput > computerInput) {
    alert('jawaban kamu salah! jawabanya adalah : ' + computerInput);
  } else {
    alert('angka tidak valid!');
  }
  
  repeat = confirm('mau memainkan lagi ?');
}
alert('Terimakasih sudah bermain');