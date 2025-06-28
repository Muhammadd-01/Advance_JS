const coding = ['cpp', 'java', 'js', 'python'];


const code =coding.forEach((item)=>{
    console.log(item);
    
})
//console.log(code); // undefined, because forEach does not return anything


//Using Filter

const mynum=[1,2,3,4,5,6,7,8,9,10];


const newNum=mynum.filter((num)=>num<5)
console.log(newNum); // Filter returns and dont show the undefined value

