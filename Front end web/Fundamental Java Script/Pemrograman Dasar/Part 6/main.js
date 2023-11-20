var s = '';

for (let i = 10; i > 0; i--) {
  for (let j = 0; j < 5; j++) {
    if (i % 2 == 0) {
      s += " #";
    } else {
      s += "# ";
    }
  }
  
  s += "\n";
}
console.log(s);