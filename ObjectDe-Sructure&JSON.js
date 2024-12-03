// De-Structuring Object


const myObj = {
    name : "Affan",
    age : 20,
    city : "Karachi"
}

// console.log(myObj.age);  // Simple Method


const {name} = myObj // Destructuring Method
const {name: firtName} = myObj // Another Method
// console.log(name);  /

// console.log(firtName);


// Json Syntax in both objects and arrays

// In Objects
// {
//     "name" : "Affan",
//     "age" : 20,
//     "city" : "Karachi"
// }

// In Arrays

// [
//     {},
//     {},
//     {}
// ]