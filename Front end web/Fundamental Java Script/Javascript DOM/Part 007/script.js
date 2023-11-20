const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumb = document.querySelectorAll('.thumb');

container.addEventListener("click", function(e) {
  if(e.target.className == 'thumb') {
    jumbo.src = e.target.src;
    jumbo.classList.add('animate');
    setTimeout(function() {
      jumbo.classList.remove('animate');
    }, 500);
    thumb.forEach(function(thumbn) {
      if(thumb.classList.contains('active'))  {
        thumb.classList.remove('active');
      }
    });
    e.target.classList.add('active');
  }
});
/*thumb[1].addEventListener('click', function() {
  alert('ok');
})*/

