//Destructuring assignment
//Array
const data = ["BENI", "18", "NUSADADI", "MAHASISWA"];

// const [nama, umur, alamat, setatus] = data;
const [nama, , , setatus] = data;

console.log(nama);
//swap
let a = 1;
let b = 2;

[a,b] = [b,a];

//return value
function tes () {
  return [1, 2];
}
const [y, z] = tes();

//rest parameter
const [p, ...values] = [1, 2, 3, 4, 5, 6];
console.log(values);
//Object
// const beni = {
//   jeneng: 'beni',
//   umur: 18
// };
// 
// const {jeneng, umur} = beni;
// 
//assignment tanpa deklarasi Object

// ({jeneng, umur} = { jeneng: 'beni', umur: 18 });
// const beni = {
//   jeneng: 'beni',
//   umur: 18
// };
// 
// const {jeneng: v, umur: r} = beni;
// console.log(v);
// 
//default values
// const beni = {
//   jeneng: 'beni',
//   umur: 18
// };
// 
// const {jeneng: ff, umur: gg, email: pk = 'ahmad'} = beni;
// console.log(email);

// const beni = {
//   jeneng: 'beni',
//   umur: 18
// };
// 
// const {jeneng, ...valuenya} = beni;
// console.log(valuenya);

const beni = {
  id: 123,
  jeneng: 'beni',
  umur: 18
};

function getID({ id }) {
  return id;
}
console.log(getID(beni));