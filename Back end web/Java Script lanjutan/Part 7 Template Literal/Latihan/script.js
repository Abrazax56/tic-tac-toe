//HTML FRAGMENTS
// const siswa = [
//   {
//     nama: 'beni',
//     email: 'a@g.com'
//   },
//   {
//     nama: 'via',
//     email: 'b@g.com'
//   },
//   {
//     nama: 'tuwek',
//     email: 'c@g.com'
//   }
// ];
// 
// const el = `<div class='mhs'>
//   ${siswa.map(m => `<ul>
//      <li>${m.nama}</li>
//      <li>${m.email}</li>
//    </ul>`).join('')}
// </div>`;
// document.body.innerHTML = el;
// const lagu = {
//   judul: 'ajojing',
//   penyanyi: 'barok',
//   feat: 'anu'
// };
// const el = `<div class='lagu'>
//    <ul>
//      <li>${lagu.judul}</li>
//      <li>${lagu.penyanyi} ${lagu.feat ? `(feat, ${lagu.feat})` : ''}</li>
//   </ul>
// </div>`;
//4. nested
const mahasiswa = {
  nama: 'ajojing',
  smester: 5,
  matkul: [
    'Rekayasa Web',
    'Analisis',
    'Interaktif',
    'perancangan'
  ]
};
function cetakMataKuliah(matakuliah) {
  return `<ol type="1">
    ${matakuliah.map(mk => `<li>${mk}</li>`).join('')}
  </ol>`;
}
const el = `<div class='lagu'>
   <h2>${mahasiswa.nama}</h2>
   <span class="semester">Semester: ${mahasiswa.smester}</span>
   <h4>mata kuliah: </h4>
   ${cetakMataKuliah(mahasiswa.matkul)}
</div>`;
document.body.innerHTML = el;