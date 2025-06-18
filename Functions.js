// Functions in JS

// Function is a block of code dsigned to perform a particular task multiple times.


function name(){

    console.log("Affan");
    
}

//name();


// function add(num1, num2){
//     console.log(num1 + num2);
    
// }


function add(num1, num2){
    // let result = num1 + num2;
    // return result;

    return num1 + num2;
}
const result = add(10,20);
//console.log("Result:", result);


function LogInUserMessage(username){
    if(!username){

        console.log("Please enter a Username");
        
    }
    else{
    return `${username} has logged in successfully.`

    }
}

console.log(LogInUserMessage("Affan"));
// console.log(LogInUserMessage());


//  Rest Operator in funcions


function addTwoNumbers(...num1){
    return num1;
    
}


// console.log(addTwoNumbers(10, 545,4565,659659,65965));


//Another way to use rest operator

function addNumbers(num1, num2, ...num3){
    console.log(num3);
}

// addNumbers(15,61,57,4654,8564)


//How to use Object in functions


const user={
    name: "Affan",
    age: 20
}


function userDetails(details){
    return`Name of the user is ${details.name} and age is ${details.age}.`;
}

// console.log(userDetails(user));

console.log(userDetails({
    name: "Unknonw",
    age:0
}));


// How to use Array in functions

const numbers =[10, 41, 54 ,44]


function  arraySecondElement(array){
    return array[2];
}

// console.log(arraySecondElement(numbers));


console.log(arraySecondElement([
    10, 20, 30, 40, 50
]));




//This keyword and Arrow functions

const userDetail = {
    name: "Affan",
    age: 20,
    welcomeMessage: function(){
        console.log(`Welcome ${this.name}`);
        
    }
}

userDetail.welcomeMessage();