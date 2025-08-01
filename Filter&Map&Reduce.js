const coding = ['cpp', 'java', 'js', 'python'];


const code =coding.forEach((item)=>{
   // console.log(item);
    
})
//console.log(code); // undefined, because forEach does not return anything


//Using Filter

const mynum=[1,2,3,4,5,6,7,8,9,10];


const newNum=mynum.filter((num)=>num<5)
//console.log(newNum); // Filter returns and dont show the undefined value

// Filter practice 

const books = [
  { title: "Atomic Habits", author: "James Clear", year: 2018, pages: 320, genre: "Self-help" },
  { title: "Deep Work", author: "Cal Newport", year: 2016, pages: 304, genre: "Productivity" },
  { title: "The Alchemist", author: "Paulo Coelho", year: 1988, pages: 208, genre: "Fiction" },
  { title: "Can't Hurt Me", author: "David Goggins", year: 2018, pages: 364, genre: "Autobiography" },
  { title: "Ikigai", author: "Francesc Miralles", year: 2016, pages: 194, genre: "Philosophy" },
  { title: "1984", author: "George Orwell", year: 1949, pages: 328, genre: "Dystopian" }
];


let userBook = books.filter((bk)=> bk.year >=2000);
userBook = books.filter((bk)=> {return bk.pages <=250 && bk.genre ==="Fiction"});
//console.log(userBook);


//Map in JavaScript

const numbers = [1, 2, 3, 4, 5];

// const newNumbers=numbers.map((num)=>num * 2);


//Chaining Filter and Map

const newNumbers = numbers
.map((num)=> num*2)
.map((num)=> num +200)
.filter((num)=> num >=20)


//console.log(newNumbers);



//Reduce in JavaScript


const num=[1,2,3];

const sum = num.reduce(function(acc, currval) { return acc + currval},0); // reduce in simple function 
//console.log(sum);


const total = num.reduce((acc, currval) => acc + currval, 0);// reduce in arrow function
console.log(total);
