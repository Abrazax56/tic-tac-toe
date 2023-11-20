const conssole = {
  log: (text, action) => {
    return action(text);
  }
};

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
//filter >= 3
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }
// conssole.log(newAngka, console.log);
const newAngka = angka.filter(a => a >= 3);
//map
const angkaBaru = angka.map(b => b * 2);
//reduce
const jumlahAngka = angka.reduce((accumulator, current) => accumulator + current);
//method chaining
const nomer = [1, 2, 3, 4, 5, 6, 7];
const hasil = nomer.filter(a => a >= 3)
.map(a => a * 2)
.reduce((x, y) => x + y);
conssole.log(hasil, console.log);