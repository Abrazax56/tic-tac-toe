//spread Operator
//memecah iterable menjadi single element
// const siswa = ['sandhika', 'doddy', 'erik'];
// const guru = ['beni', 'rusli'];
// const orang = [...siswa, ...guru]
// console.log(...orang);

// const siswa = ['sandhika', 'doddy', 'erik'];
// const siswaClone = [...siswa];
// siswaClone.push('beni');
// console.log(siswaClone);
// console.log(siswa);
// const list = document.querySelectorAll("li");
// const nama = [...list].map(e => e.textContent);
// console.log(nama);

// const h1 = document.querySelector(".ben");
// const arr = [...h1.textContent].map(e => `<span class="t">${e}</span>`).join('');
// h1.innerHTML = arr;





//rest parameter
// function myFunc(...myArgs) {
//   return console.log(myArgs);
// }
// myFunc(1,2,3,4,5,6);

function penjumlahan () {
  return console.log([...arguments].reduce((x, y) => x + y));
}

penjumlahan(6, 7, 12);

//Array Destructuring 

const kelompok1 = ['beni', 'via', 'auk', 'yaya', 'vian'];
const [ketua, wakil, ...anggota] = kelompok1;

//Object Destructuring

const Tim = {
  pm: 'beni',
  fe1: 'via',
  fe2: 'amel',
  be: 'rusli',
  ux: 'ahmad',
  devOps: 'abdurrahman'
};
const {pm, ...myTeam} = Tim;
console.log(myTeam); 

//filter
function filterBy(type, ...nilai) {
  return nilai.filter(e => typeof(e) == type);
}
console.log(...filterBy('number', 1, 2, true, 'beni', 3, false, 'rusli'));