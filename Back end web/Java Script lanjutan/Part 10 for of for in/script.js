//for of
//array
// const mhs = ['beni', 'via', 'aul'];
// 
// for(const [x, y] of mhs.entries()) console.log(`${y} adalah nomor urut ke ${x + 1}`);
//String
// const nama = 'beni';
// for(const n of nama) console.log(n);
// 
// mhs.forEach(e => {
//   for(const z of e) console.log(z);
// });


//nodelist



const list = document.querySelector("ol");
const form = document.forms['form'];
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');

const listNama = [];


form.addEventListener("submit", e => {
  e.preventDefault();
  let b = document.createElement('li');
  let c = document.createTextNode(input.value);
  b.appendChild(c);
  list.appendChild(b);
});
for(const a of listNama) {
    let b = document.createElement('li');
    let c = document.createTextNode(a);
    b.appendChild(c);
    list.appendChild(b);
  }


//arguments
function jumlahAngka() {
  //console.log(arguments);
  let jumlah = 0;
  for (let s of arguments) {
    jumlah += s;
  }
}
jumlahAngka(1,2,3,4,5,6);


//forin
const siswa = {
  nama: 'beni',
  umur: 18,
  email: 'ahmadbenurusli@gmail.com'
};
for(const a in siswa) console.log(siswa[a]);