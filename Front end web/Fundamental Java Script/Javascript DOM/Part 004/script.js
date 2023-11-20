
/*const button1 = document.querySelector('#btn');
const button2 = document.querySelector('#btn2');
const button3 = document.querySelector('#btn3');
const button4 = document.querySelector('#btn4');
button1.addEventListener("click", function() {
  h1.classList.toggle('warnaText');
  button1.classList.toggle('warnabutton');
});
button2.addEventListener("click", function() {
  h1.classList.toggle('warnaText2');
  button2.classList.toggle('warnabutton2');
});
button3.addEventListener("click", function() {
  h1.classList.toggle('warnaText3');
  button3.classList.toggle('warnabutton3');
});
button4.addEventListener("click", function() {
  h1.classList.toggle('warnaText4');
  button4.classList.toggle('warnabutton4');
});*/



const redSlide = document.querySelector('input[name=redSlide]');
const greenSlide = document.querySelector('input[name=greenSlide]');
const blueSlide = document.querySelector('input[name=blueSlide]');
const p = document.getElementById('paragraf');

redSlide.addEventListener('input', function() {
  const red = redSlide.value;
  const green = greenSlide.value;
  const blue = blueSlide.value;
  document.body.style.backgroundColor = 'rgba(' + red + ',' + green + ',' + blue + ', 1)';
  const pText = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
  p.innerHTML = pText;
});
greenSlide.addEventListener('input', function() {
  const red = redSlide.value;
  const green = greenSlide.value;
  const blue = blueSlide.value;
  document.body.style.backgroundColor = 'rgba(' + red + ',' + green + ',' + blue + ', 1)';
  const pText = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
  p.innerHTML = pText;
});
blueSlide.addEventListener('input', function() {
  const red = redSlide.value;
  const green = greenSlide.value;
  const blue = blueSlide.value;
  document.body.style.backgroundColor = 'rgba(' + red + ',' + green + ',' + blue + ', 1)';
  const pText = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
  p.innerHTML = pText;
});

/*document.body.addEventListener('mosemove', function(e) {
  const xPosition = Math.floor((event.clientX / window.innerWidth) * 255);
  const yPosition = Math.floor((event.clientY / window.innerHeight) * 255);
  document.body.style.backgroundColor = 'rgb(' + xPosition + ',' + yPosition + ',100)';
});*/