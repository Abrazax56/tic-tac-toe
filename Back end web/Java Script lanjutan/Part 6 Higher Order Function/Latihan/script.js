//seleksi elemen vid
const videos = Array.from(document.querySelectorAll('[data-duration]'));
//seleksi yg javascript lanjutan
let jsAdvanced = videos.filter(video => video.textContent.includes('Javascript Lanjutan'))
//ambil durasi masing2 vid
.map(item => item.dataset.duration)
//ubah durasi menjadi float, ubah menit menjadi detik
.map(waktu => {
  const parts = waktu.split(':').map(part => parseFloat(part));
  return (parts[0] * 60) + parts[1];
})
//jumlah kan semua detik
.reduce((total, detik) => total + detik);
//ubah formatnya ke jam menit detik
const jam = Math.floor(jsAdvanced / 3600);
jsAdvanced = jsAdvanced - jam * 3600;
const menit = Math.floor(jsAdvanced / 60);
const detik = jsAdvanced - menit * 60;
//simpan di dom
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`;
const Jumlah = document.querySelector('.jumlah-video');
const jumlah = videos.filter(video => video.textContent.includes('Javascript Lanjutan'));
Jumlah.textContent = `${jumlah.length} Video`;