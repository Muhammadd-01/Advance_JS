//Number in JavaScript

const score = 400
console.log(score);


const balance = new Number(4414)

console.log(balance.toString().length);
console.log(balance.toFixed(2));
console.log(balance.toPrecision(1));
console.log(balance.toExponential(2));


const hundreds = 1000000
console.log(hundreds.toLocaleString());

console.log(hundreds.toLocaleString('en-IN'));

console.log(Number.MAX_SAFE_INTEGER);



//Maths in JavaScript


console.log(Math);
console.log(Math.max(4,7,5,78))
console.log(Math.min(4,7,5,78))

console.log(Math.round(5455.5456444));
console.log(Math.ceil(6.1));
console.log(Math.floor(6.9));

console.log(Math.random()*10);


const min = 20
const max = 40

console.log(Math.floor(Math.random() * max - min +1) + min);

