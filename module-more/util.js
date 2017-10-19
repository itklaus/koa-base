// part #1
let util = require('util');
var obj = {
  a: 5,
  b: 6,
  inspect: function() {
    return 123;
  }
}
obj.self = obj;
console.log( util.inspect(obj) );


// part #2
var str = util.format('My %s %d', 'string', '...', {test: 'obj'});
console.log(str);



// PART #3
// Родитель
function Animal(name) {
  this.name = name;
}

Animal.prototype.walk = function() {
  console.log('Ходит' + this.name);
};

// Потомок
function Rabbit(name) {
  this.name = name;
}

util.inherits(Rabbit, Animal);

Rabbit.prototype.jump = function() {
  console.log('Прыгает' + this.name);
}

// Использование
let rabbit = new Rabbit('наш кролик');
rabbit.walk();
rabbit.jump();
