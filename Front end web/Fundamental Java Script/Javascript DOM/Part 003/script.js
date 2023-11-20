const paragraf = document.querySelector('.p3');

function ubahWarna () {
  paragraf.style.backgroundColor = 'blue';
}
function ubahWarna2 () {
  paragraf2.style.backgroundColor = 'green';
}
const paragraf2 = document.querySelector('.p2');
paragraf2.onclick = ubahWarna2;


const p4 = document.querySelector('section#b p');
p4.addEventListener("click", function() {
  const ul = document.querySelector('section#b ul');
  const li = document.createElement('li');
  const textLi = document.createTextNode('items baru');
  li.appendChild(textLi);
  ul.appendChild(li);
});