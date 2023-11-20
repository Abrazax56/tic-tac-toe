//element.innerHTML
const h1 = document.querySelector('#judul');
//tulisan
//h1.innerHTML = 'beni';
//element
h1.innerHTML = '<em>BENI<em>';

const sect = document.querySelector('section#a');
sect.innerHTML = 'hello world';

//element.style.<css property>
/*h1.style.color = 'yellow';
h1.style.backgroundColor = 'grey';*/


//element.setAttribute('attribute', 'value')
//h1.setAttribute('class', 'tittle');
//element.getAttribute('attribute')
//h1.getAttribute('class');
//element.removeAttribute('attribute')
//h1.removeAttribute('class');

//element.classList
//element.classList.add()
//h1.classList.add('tittle');
//element.classList.remove()
//h1.classList.remove('tittle');
//element.classList.toggle()
//h1.classList.toggle('tittle');

//element.classList.item()
//h1.classList.item(1);
//element.classList.contains()
//const judul = h1.classList.contains('tittle');
//element.classList.replace()
h1.classList.replace('tittle2', 'tittle5');