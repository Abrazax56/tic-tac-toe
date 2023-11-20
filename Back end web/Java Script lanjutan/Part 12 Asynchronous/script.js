// function kalikan(a, b) {
//   return a * b;
// }
// function hitungLuas (sisi) {
//   return kalikan(sisi, sisi);
// }
// function cetakLuasKotak(sisi) {
//   const luas = hitungLuas(sisi);
//   console.log(luas);
// }
// 
// cetakLuasKotak(5);



//Synchronous callback
// function tampilPesan(callback) {
//   const nama = prompt('masukan nama');
//   callback(nama);
// }
// 
// tampilPesan(nama => alert(`hallo ${nama}`));


// const siswa = [
//   {
//     "nama" : "beni",
//     "umur" : 18,
//     "pendidikan" : "smk",
//     "alamat" : {
//       "desa" : "tinggarjaya",
//       "jalan" : {
//         "no" : 4,
//         "namaJalan" : "Ahmad Yani"
//       }
//     }
//   },
//   {
//     "nama" : "ahmad",
//     "umur" : 18,
//     "pendidikan" : "smk",
//     "alamat" : {
//       "desa" : "tegalsari",
//       "jalan" : {
//         "no" : 4,
//         "namaJalan" : "Kalimantan"
//       }
//     }
//   },
//   {
//     "nama" : "rusli",
//     "umur" : 17,
//     "pendidikan" : "sma",
//     "alamat" : {
//       "desa" : "tinggarjaya",
//       "jalan" : {
//         "no" : 4,
//         "namaJalan" : "Ahmad Yani"
//       }
//     }
//   },
// ];
// 
// console.log('mulai');
// siswa.forEach(i => console.log(i.nama));
// console.log('selesai');
// 


//asynchronous callback
// function getDataSiswa(url, success, error) {
//   let siswa = new XMLHttpRequest();
//   
//   siswa.onreadystatechange = function() {
//     if ( siswa.readyState === 4) {
//       if( siswa.status === 200) {
//         success(siswa.response);
//       } else if (siswa.status === 404) {
//         error();
//       }
//     }
//   };
//   siswa.open('get', url);
//   siswa.send();
// }
// console.log('mulai');
// getDataSiswa('siswa.json', results => {
//   const Siswa = JSON.parse(results);
//   Siswa.forEach(i => console.log(i.nama));
// }, () => {
//   
// });
// console.log('selesai');



//jquery
alert('mulai');
$.ajax({
  url: 'siswa.json',
  success: (Siswa) => {
    Siswa.filter(i => alert(i.nama));
  },
  error: (err) => {
    alert(e.responseText);
  }
});
alert('selesai');