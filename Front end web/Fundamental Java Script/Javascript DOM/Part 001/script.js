//Dom selection
//document.getElementById('id') -> element
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = 'grey';
judul.innerHTML = 'BENI'; //mengganti text di element
// document.getElementsByTagName('tag') -> HTML COLLECTION
const p = document.getElementsByTagName('p');
for (let i = 0; i < p.length; i++) {
  p[i].style.color = 'green'; //seleksi berdasarkan index mirip seperti array
}
const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontFamily = 'Monospace';

//document.getElementsByClassName('class') -> HTML COLLECTION

const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'ini adalah seleksi kelas';

//document.querySelector('slector css') -> element

const li = document.querySelector('#b ul li:nth-child(2)');
li.style.color = 'brown';
li.style.fontFamily = 'Monospace';

//document.querySelectorAll('selector css') -> nodeList
/*const span = document.querySelectorAll('span');
for (let i = 0; i < span.length; i++) {
  span[i].style.color = 'purple';
}*/

//mengubah node root
const secC = document.getElementById('c');
const span = secC.getElementsByTagName('span');
for (let i = 0; i < span.length; i++) {
  span[i].style.color = 'purple';
}