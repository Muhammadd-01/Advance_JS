// const tinderUser = new Object() // Singleton Object

const tinderUser = {}  // non singleton object


tinderUser.id = "123abc"
tinderUser.name = "Affan"
tinderUser.age = 25
// console.log(tinderUser);


//Objects in Objects

const person = {
    email : "affan@gmail",
    userName : {
        userFirstName : "Muhammad",
        userLastName : "Affan"
    }
}

// console.log(person.userName.userLastName);


//merging two or more objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

// const obj4 = Object.assign({}, obj1, obj2, obj3); // Not use mostly

// const obj4 = {...obj1, ...obj2, ...obj3}; 	// use mostly

// console.log(obj4);


// Objects in Arrays


const users = [
    {id: 1, name: "Affan"},
    {id: 2, name: "Ali"},
    {id: 3, name: "Asad"},
]


console.log(users[1].name);


// to check all keys of object // Note : keys() & Values() return array of keys


console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // return all key value pairs in array of arrays


// to check is propert exist in object or not // Note : hasOwnProperty() return boolean value

console.log(tinderUser.hasOwnProperty("name"));


