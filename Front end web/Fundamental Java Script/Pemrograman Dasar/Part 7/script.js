function getPilihanComputer () {
  const com = Math.random();

  if(com < 0.34) return 'gajah';
  if (com >= 0.34 && com < 0.6) return 'orang';
  return 'semut';
}

function getHasil (com, player) {
  if (player == com) return 'SERI';
  if (player == 'gajah') return (com == 'orang') ? 'MENANG' : 'KALAH';
  if (player == 'orang') return (com == 'gajah') ? 'KALAH' : 'MENANG';
  if (player == 'semut') return (com == 'orang') ? 'KALAH' : 'MENANG';
}



const computerInput = document.querySelector('.img-komputer');
const info = document.querySelector('.info');
const playerGajah = document.querySelector('.gajah');
const playerOrang = document.querySelector('.orang');
const playerSemut = document.querySelector('.semut');

function putar() {
  const imgComputer = document.querySelector('.img-komputer');
  const gambar = ['gajah', 'semut', 'orang'];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function() {
    if ( new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute('src', 'img' + gambar[i++] + '.png');
    if (i == gambar.length) i = 0;
  }, 100);
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pilih) {
  pilih.addEventListener('click', function() {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pilih.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);
    putar();
    setTimeout(function() {
      computerInput.setAttribute('src', 'img/' + pilihanComputer + '.png');
      info.innerHTML = hasil;
    }, 1000);
  });
});
/*playerGajah.addEventListener("click", function() {
  const pilihanComputer = getPilihanComputer();
  const pilihanPlayer = playerGajah.className;
  const hasil = getHasil(pilihanComputer, pilihanPlayer);
  computerInput.setAttribute('src', 'img/' + pilihanComputer + '.png');
  info.innerHTML = hasil;
});
playerSemut.addEventListener("click", function() {
  const pilihanComputer = getPilihanComputer();
  const pilihanPlayer = playerSemut.className;
  const hasil = getHasil(pilihanComputer, pilihanPlayer);
  computerInput.setAttribute('src', 'img/' + pilihanComputer + '.png');
  info.innerHTML = hasil;
});
playerOrang.addEventListener("click", function() {
  const pilihanComputer = getPilihanComputer();
  const pilihanPlayer = playerOrang.className;
  const hasil = getHasil(pilihanComputer, pilihanPlayer);
  computerInput.setAttribute('src', 'img/' + pilihanComputer + '.png');
  info.innerHTML = hasil;
});*/