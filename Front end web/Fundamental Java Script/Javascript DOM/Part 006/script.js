//const card = document.querySelectorAll('.card');
//const tutup = document.querySelectorAll('.close');

/*for (let i = 0; i < tutup.length; i++) {
    tutup[i].addEventListener("click", function(e) {
      //tutup[i].parentElement.style.display = 'none';
      e.target.parentElement.style.display = 'none';
  });
}*/

/*tutup.forEach(function (el) {
  el.addEventListener("click", function(e) {
    e.target.parentElement.style.display = 'none';
    e.preventDefault();
    e.stopPropagation();
  });
});

const card = document.querySelectorAll('.card');
card.forEach(function(card) {
  card.addEventListener('click', function(r) {
    alert('ok');
  })
})*/

const container = document.querySelector('.container');

container.addEventListener("click", function(e) {
  if(e.target.className == 'close') {
    e.target.parentElement.style.display = 'none';
  }
});

//const nama = document.querySelector('.nama');
//console.log(nama.parentElement.parentElement);
//console.log(nama.nextElementSibling);
