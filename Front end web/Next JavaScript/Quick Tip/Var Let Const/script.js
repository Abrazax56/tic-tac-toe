//setTimeout(function() {}, 10);
//setInterval(function() {}, 10);

//setTimeout(tampilkanPesan, 3000);
/*const tes = setTimeout(function() {
  console.log('ok');
}, 5000);
const tombol = document.getElementById('tombol');
tmbol.addEventListener("click", function() {
  clearTimeout(tes);
  console.log('selesai');
});
function tampilkanPesan(argument) {
  console.log('Hello World!');
}*/
/*const tes = setInterval(function() {
  const h1 = document.createElement('h1');
  const text = document.createTextNode('Hallo');
  h1.appendChild(text);
  document.body.appendChild(h1);
}, 1000);
const tombol = document.getElementById('tombol');
tombol.addEventListener("click", function() {
  clearInterval(tes);
});*/
//Program Hitung Mundur
const tanggalTujuan = new Date('Sep 23, 2023 09:38:00').getTime();
const hitungMundur = setInterval(function() {
  const sekarang = new Date().getTime();

  const selisih = tanggalTujuan - sekarang;

  const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
  const jam = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  const menit = Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60));
  const detik = Math.floor(selisih % (1000 * 60) / 1000);

  const text = document.getElementById('teks');
  text.innerHTML = 'waktu hidup anda tinggal : ' + hari + ' hari, ' + jam + ' jam, ' + menit + ' menit, ' + detik + ' detik';
  if (selisih == 0) {
    clearInterval(hitungMundur);
    text.innerHTML = 'Selamat kamu mati!';
  }
  
}, 1000);



