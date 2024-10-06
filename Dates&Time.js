//Dates

const newDate = new Date()

// console.log(newDate.toString());
// console.log(newDate.toISOString());
// console.log(newDate.toDateString());
// console.log(newDate.toJSON());
// console.log(newDate.toLocaleString());


const myDate = new Date(2022,1,15,5,31)
// console.log(myDate);


//Times


const newTime = Date.now()
// console.log(Math.floor(myDate.getTime()/1000));


const myNewDate = new Date()
// console.log(myNewDate.getTime());
// console.log(myNewDate.getMonth());



console.log(myNewDate.toLocaleDateString('defualt',{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}));
