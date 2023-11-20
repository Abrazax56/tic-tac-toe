var a = 1; //variable global

function tes(a) { //diambil dari arguments pada pemanggilan function
  console.log(a); //mengambil variable lokal (parameter)
}

tes(a); //mengambil dari variable global
console.log(a); //mengambil dari variable global