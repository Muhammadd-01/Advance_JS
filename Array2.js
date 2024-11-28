const marvelHeroes = [ "thor", "ironman", "spiderman" ];
const dcHeroes = [ "superman",  "flash", "batman" ];

// Push Function
marvelHeroes.push(dcHeroes);
console.log(marvelHeroes);
console.log(marvelHeroes[3][1]);

// Concat Function
const allHeroes = marvelHeroes.concat(dcHeroes);
console.log(allHeroes);


// Spread Function
const allNewHeroes = [...marvelHeroes, ...dcHeroes];
console.log(allNewHeroes);

// Flat Function
const anotherArray = [1,2,3,[4,5,6],7,8,[9,10,[11,12]]];
const realArray = anotherArray.flat(Infinity);
console.log(realArray);


// Array check function
 

console.log(Array.isArray("affan"));


//Array convert function

console.log(Array.from("affan"));

//Interesting case for interviews

console.log(Array.from({name : "affan"})); 


// Array Of Function

let num1 = 10;
let num2 = 20;
let num3 = 30;

console.log(Array.of(num1, num2, num3));