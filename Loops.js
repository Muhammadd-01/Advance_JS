//Loops in JavaScript


// for(i = 0; i<= 10; i++){
   // console.log(i);
    
// }


// for(i = 0; i<=10; i++){
   // console.log(`The value of i is ${i}`);
//     for(j=0; j<=10; j++){
     // console.log(`The value is ${j} and the value of i is ${i}`);
      //console.log(i + '*' + j + '=' + i*j);
        
//     }
    

// Break Statement in JavaScript
// for(i =1; i<=10; i++){

//     if(i == 5){
      // console.log("Skipping 5");
       //break
//     }
   // console.log(i);
    
// }
//Continue Statement in JavaScript
// for(i =1; i<=10; i++){

//     if(i == 5){
     // console.log("Skipping 5");
    //  continue
//     }
  //  console.log(i);
    
// }


//While loop in Javascript


// let i = 0;

// while(i<=10){
//     console.log(i);
   
//     i++;
// } 


// let myArray= ['Affan','Ali','Ahmed']

// let i=0;
// while(i<myArray.length){
//     console.log(myArray[i]);
//     i = i+1;
// }


//Do While Loop in JavaScript
// let i =1;
// do{
//     console.log('Hello');
//     i++;
// }while(i>5)

// For of Loop in JavaScript


let myArray = ['Affan', 'Ali', 'Ahmed'];

for(const name of myArray){
   // console.log(name);
    
}

//Map in JavaScript


const names = new Map()

names.set('name1', 'Affan');
names.set('name2', 'Rizwan');
names.set('name3', 'Yasir');

for(const key of names.keys()){
    //console.log(key);
    
}


for(const [key, value] of names){
   // console.log(key,'=>', value);
    
}

// Keys and Values in normal object can not be iterated directly using for...of loop.
let myObject ={
    "game1":"PUBG",
    "game2":"COD",
    "game3":"Free Fire",
}

// for(const key of myObject){
   //console.log(key);
    
// }

//But we can use for in loop to iterate over keys of Objects and Arrays

let newObject = {
PK: 'Pakistan',
Name: 'Affan',
Age: 23,
}
for (const key in newObject) {
  //console.log(`${key}: ${newObject[key]}`);
  
}

// for of loop can directly print values of Arrays but for in loop can not directly print values of Arrays it print default numbers of Array like 0, 1, 2, etc. We call the keys of Array as indexes in for in loop.

let newArray = ['Affan', 'Ali', 'Ahmed'];

for(const value in newArray){
   // console.log(newArray[value]);
    
}

//Foreach loop in JavaScript

let myArray2 = ['Affan', 'Ali', 'Ahmed'];

myArray2.forEach(function(item){
      //console.log(item);
})


myArray2.forEach((item)=>{
   //console.log(item)
})

myArray2.forEach((item, index, arr)=>{
 //  console.log(item, index, arr);
   
})

let a =[
   {name: 'Affan', age: 23},
   {name: 'Ali', age: 24},
   {name: 'Ahmed', age: 25}
]

a.forEach((item)=>{
//console.log(item.name, item.age);
   
})