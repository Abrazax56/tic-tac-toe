//DOM MANIPULATION
//document.createElement()
const pBaru = document.createElement('p');
//document.createTextNode()
const paBaru = document.createTextNode('paragraf baru');
//node.appendChild()
pBaru.appendChild(paBaru);
const judul = document.getElementById('a');
judul.appendChild(pBaru);
//node.insertBefore()
const li = document.createElement('li');
const liText = document.createTextNode('new items');
li.appendChild(liText);
const parrentElement = document.querySelector('section#b ul');
const li2 = document.querySelector('section#b ul li:nth-child(2)');

parrentElement.insertBefore(li, li2);
//parrentNode.removeChild()
const link = document.querySelector('section#a a');
judul.removeChild(link);
//parentNode.replaceChild()
const judul2 = document.querySelector('section#b'); //tangkap parent
const judulLama = judul2.querySelector('p'); //tangkap yg mau di replace
const judulBaru = document.createElement('h2'); //buat element baru
const textJudul = document.createTextNode('Judul Baru'); //buat text pengisi element
judulBaru.appendChild(textJudul); //tambahkan text ke element
judul2.replaceChild(judulBaru, judulLama); //replace child