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

console.log(data.name); // One method to acceess data
console.log(data["full name"]); // Another method to access data
console.log(data[mySym]); // method to access symbol