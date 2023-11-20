//template literal
const DataHuman = function(name, age, hobby) {
  this.name = name;
  this.age = age;
  this.hobby = hobby;
  this.sayHello = function() {
    return console.log(`Hallo nama saya ${this.name}
    Umur saya ${this.age}
    Hobby Saya ${this.hobby}`);//is a template literal example
  };
  this.sayHello();
};
new DataHuman('beni', 18, 'swimming');
new DataHuman('Via', 18, 'swimming');