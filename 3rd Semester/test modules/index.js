const Square = require('./square.js');
const circle = require('./circle.js');

const mySquare = new Square(2);
console.log(`The area of mySquare is ${mySquare.area()}`);

console.log(`The area of a circle of radius 4 is ${circle.area(4)}`);

console.log(`The area of a circumference of radius 4 is ${circle.circumference(4)}`);