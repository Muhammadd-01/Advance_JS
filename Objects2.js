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

console.log(person.userName.userLastName);
``