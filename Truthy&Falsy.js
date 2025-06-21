// Truthy & Falsy values in JavaScript

//Falsy values
const falsyValues = [false, 0, -0,"", null, undefined, NaN];

//Truthy values
const truthyValues = [true, 1, "Hello", {}, [], function() {}, -1];



//How to check if Array is empty

const emptyArray= [];

if (emptyArray.length ===0) {
    console.log("Array is empty");
    
}







const emptyObj= {};



//How to check if an object is empty
if (Object.keys(emptyObj).length ===0) {
    console.log("Object is empty");
    
}