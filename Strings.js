const name = "Affan";
const age = 19;

//Outdated Syntax
console.log(name + age + " Hello");

//Modern Syntax
console.log(`Hello my name is ${name} and my age is ${age}`);


//About String:-
const newName = new String('MuhammadAffan');
console.log(newName.charAt(10));
console.log(newName.length);
console.log(newName.indexOf('n'));


const newString = "    Affan    ";
console.log(newString);

console.log(newString.trim());


const anotherString = "Affann";

console.log(anotherString.substring(0,3));

console.log(anotherString.slice(-2, 3));

const url = "www.Affan.com";

console.log(url.replace('Affan', 'Muhammad'));

console.log(url.includes('Affan'));

const nameString = "Muhammad-Affan-Hello"

console.log(nameString.split('-'));



