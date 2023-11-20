//array manipulation
//menambah isi array
/*var aray = [];
aray[0] = "beni";
aray[1] = "Via";
aray[2] = "sasmyta";

console.log(aray);*/

//menghapus isi aray
/*var arr = [1, 2, 3, 4];
arr[1] = undefined;
console.log(arr)*/

//menampilkan isi array
/*var arr = ['beni', 'via', 'sasmyta'];
for (var i = 0; i < arr.length; i++) {
  console.log('Mahasiswa ke ' + (i+1) + ' : ' + (arr[i]));
}*/

//method array
//var arr = ['beni', 'via', 'samyta'];
//console.log(arr.join(' ❤️ '))

//arr.push('alisa');
//arr.pop();
//arr.unshift('alisa');
//arr.splice(1, 2, 'alisa', 'Chindy');
//var arr = [];
//var arr2 = arr.slice(1,3);
//console.log(arr2.join(' ❤️ '));
/*arr.forEach(function(e, i) {
  console.log(i + 1 + ' ' + e);
});*/
/*var arr2 = arr.map(function(e) {
  return e * 3;
});
console.log(arr2.join(' - '))*/
/*arr.sort(function(a,b) { return a - b });
console.log(arr.join(' - '))*/
//var angka = arr.find(function(x) { return x >= 5 });
//console.log(angka);
//var arr2 = arr.push('beni');
//console.log(arr2);

/*const myArray = [1, 2, 3, 4, 5];

const index = myArray.indexOf(2);

const x = myArray.splice(index, 1);

console.log(`myArray values: ${myArray}`);
console.log(`variable x value: ${x}`);*/
function removeElementFromArray(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      array.splice(i, 1);
      i--; // Mengurangi i karena kita telah menghapus elemen dari array
    }
  }
  
  return array;
}

// Contoh penggunaan fungsi
var myArray = ['beni', 'via', 'slamet'];
console.log(removeElementFromArray(myArray, 'slamet')); // Output: ['beni', 'slamet']

