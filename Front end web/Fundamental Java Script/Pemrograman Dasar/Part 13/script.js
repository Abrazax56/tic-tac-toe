//latihan
var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang) {
  //jika angkot kosong
  if(penumpang.length == 0) {
    //tambah penumpang
    penumpang.push(namaPenumpang);
    //kembalikan nilai
    return penumpang;
  } else {
    //telusuri seluruh kursi
    for (let i = 0; i < penumpang.length; i++) {
      //jika kursi kosong
      if(penumpang[i] == undefined) {
        //tambah penumpang
        penumpang[i] = namaPenumpang;
        //kembalikan isi Array
        return penumpang;
      } else if (penumpang[i] == namaPenumpang) {
        console.log(namaPenumpang + ' sudah ada didalam angkot');
        return penumpang;
      } else if(i == penumpang.length - 1) {
        //tambah penumpang di akhir Array
        penumpang.push(namaPenumpang);
        //kembalikan isi Array
        return penumpang;
      }
    }
  }
};
/*function removeElementFromArray(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      array.splice(i, 1);
      i--; // Mengurangi i karena kita telah menghapus elemen dari array
    }
  }
  
  return array;
}*/
var hapusPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    console.log('angkot masih kosong');
    return penumpang;
  } else { 
    for (let i = 0; i < penumpang.length; i++) {
      if (penumpang[i] === namaPenumpang) {
        penumpang.splice(i, 1, undefined);
        return penumpang;
      }
    }
    if (penumpang != namaPenumpang) {
      console.log(namaPenumpang + ' tidak ada didalam angkot');
    }
    return penumpang;
  }
};