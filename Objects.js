// Singleton Object
// Object.create

// Object literals

const mySym = Symbol("key1");

const data = {
    name: "affan",
    "full name": "Muhammad affan",
    [mySym]: "mykey",
    age: "19",
    location: "Karachi",
    isLoggedIn: true,
    lastLoginDays : ["Monday", "Tuesday"],
}

console.log(data.name); // One method to acceess data and mostly used
console.log(data["full name"]); // Another method to access data
console.log(data[mySym]); // method to access symbol


//Change the value of a property

data.email = "affan@gmail.com";

// Freeze the object so no one can change it

Object.freeze(data);

// data.email = "affan122@gmail.com"

console.log(data);

// Add function in to the object

data.greeting = function(){
    console.log("Assalamualaikum");
}
console.log(data.greeting());


//String interpolation


data.greetingTwo = function(){
    console.log(`Assalamualaikum , ${this.name}`);
}


 console.log(data.greetingTwo());