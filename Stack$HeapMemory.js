// Stack Memory Example:- (String, Number, Boolean etc )

let namee = "Muhammad Affan";

let nameTwo = namee;

nameTwo = "Affan";


console.log(namee);
console.log(nameTwo);


//Heap Memory Example:- (Object, Array etc)


let userOne = {
    name: "Muhammad Affan",
    age: 19
};


let userTwo = userOne;

userTwo.name = "Affan";

console.log(userOne.name);
console.log(userTwo.name);


