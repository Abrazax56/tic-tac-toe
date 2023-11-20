// $.ajax({
//   url: 'http://www.omdbapi.com/?apikey=dca61bcc&s=avengers',
//   success: movies => console.log(movies)
// });
// 

// const film = new XMLHttpRequest();
// film.onreadystatechange = function () {
//   if (film.status === 200) {
//     if (film.readyState === 4) {
//       console.log(JSON.parse(film.response));
//     }
//   } else {
//     console.log(film.responseText);
//   }
// };
// film.open('get', 'https://api.github.com/users/abrazax56');
// film.send();


// fetch('https://api.github.com/users/abrazax56')
// .finally(() => console.log('selesai'))
// .then(response => response.json())
// .then(response => console.log(response));

//contoh
// let ditepati = false;
// const janjiManis = new Promise((resolve, reject) => {
//   if(ditepati) {
//     resolve('janji telah ditepati');
//   } else {
//     reject('janji di ingkari');
//   }
// });
// janjiManis
// .then(response => console.log('Ok' + response))
// .catch(response => console.log('Bad' + response))
// let ditepati = true;
// const janjiManis = new Promise((resolve, reject) => {
//   if(ditepati) {
//     setTimeout(() => {
//       resolve('ditepati setelah beberapa waktu');
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       resolve('Tidak ditepati setelah beberapa waktu');
//     }, 2000);
//   }
// });
// console.log('mulai');
// console.log(janjiManis.then(() => console.log(janjiManis)));
// console.log('selesai');

// const film = new Promise(resolve => {
//   setTimeout(() => {
//     resolve([{
//       judul: 'Avengers',
//       sutradara: 'beni', 
//       pemeran: 'via'
//     }]);
//   }, 2000);
// });
// 
// const cuaca = new Promise(resolve => {
//   setTimeout(() => {
//     resolve([{
//       kota: 'Cilacap',
//       temp: '44°', 
//       komdisi: 'umeb'
//     }]);
//   }, 2000);
// });
// 
// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));

// Promise.all([film, cuaca])
// .then(response => {
//   const [film, cuaca] = response;
//   console.log(film);
//   console.log(cuaca);
//   });

const form = document.forms['form'];
const input = document.querySelector(".input");
const list = document.querySelector('.list');
const pp = document.querySelector('.profile');
const nama = document.querySelector('.nama');
const login = document.querySelector('.login');
const id = document.querySelector('.id');
const bio = document.querySelector('.bio');
const repo = document.querySelector('.pr');
const following = document.querySelector('.following');
const followers = document.querySelector('.followers');

// form.addEventListener("submit", e => {
//   e.preventDefault();
//   fetch(`https://api.github.com/users/${input.value}`)
//   .then(response => response.json())
//   .then(response => {
//     pp.setAttribute('src', response.avatar_url);
//     nama.textContent = `Name : ${response.name}`;
//     login.textContent = `Username : ${response.login}`;
//     id.textContent = `ID : ${response.id}`;
//     bio.textContent = `BIO : ${response.bio}`;
//     repo.textContent = `Public Repo : ${response.public_repos}`;
//     following.textContent = `Following : ${response.following}`;
//     followers.textContent = `Followers : ${response.followers}`;
//     list.style.visibility = 'visible';
//    });
//    form.style.visibility = 'hidden';
// });
// const text = 'contoh todolist sederhana menggunakan Javascript';
// fetch('https://api.openai.com/v1/chat/completions', {
//   method: 'POST',
//   headers: {
//     "Content-type" : 'application/json',
//     "Authorization" : 'Bearer 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'
//   },
//   body: JSON.stringify({
//     model: "gpt-3.5-turbo",
//     messages: [{role: "user", content: text}]
//   })
// })
// .finally(() => console.log('selesai'))
// .then(response => response.json())
// .then(response => {
//   console.log(response);
//   console.log(response.choices[0].message.content);
//   
// });
// console.log('selesai');