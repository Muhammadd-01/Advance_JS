// Truthy & Falsy values in JavaScript

//Falsy values
const falsyValues = [false, 0, -0,"", null, undefined, NaN];

//Truthy values
const truthyValues = [true, 1, "Hello", {}, [], function() {}, -1];










const emptyObj= {};



//How to check if an object is empty
if (Object.keys(emptyObj).length ===0) {
    console.log("Object is empty");
    
}