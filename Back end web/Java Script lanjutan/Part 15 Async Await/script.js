
function cobaProm() {
  return new Promise((resolve, reject) => {
    const waktu = 5000;
    if(waktu < 5000) {
      setTimeout(function() {
         resolve('selesai');
      }, waktu);
    } else {
      reject('kelamaan!');
    }
  });
}

async function coba() {
  try {
    const njejel = await cobaProm();
    console.log(njejel);
  } catch (err) {
    console.error(err);
  }
}

coba();