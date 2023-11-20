//Tagged Tenplate
// const nama = 'beni';
// const umur = 33;
// 
// function coba(strings, ...args) {
//   // let result = '';
  // strings.forEach((str, index) => {
//     result += `${str}${args[index] || ''}`;
//   });
//   return result;
//   return strings.reduce((x, y, i) => `${x}${y}${args[i] || ''}`, '');
// }
// 
// const str = coba`Hallo nama saya ${nama} umur saya ${umur}`;
// console.log(str);










const nama = 'beni';
const umur = 33;
const email = 'a@g.ckm';

function highlight(strings, ...args) {
  return strings.reduce((x, y, i) => `${x}${y}<span class="hl">${args[i] || ''}</span>`, '');
}

const str = highlight`Hallo nama saya ${nama} umur saya ${umur} dan email saya ${email}`;
//document.body.innerHTML = str;






