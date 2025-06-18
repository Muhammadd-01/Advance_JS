//Imediately Invoked Function Expression (IIFE)

//Named IIFE
(function DB(){
    console.log(`DB CONNECTED`);
    
})();


(()=>{
    console.log(`DB CONNECTED`)
})();

((Name)=>{
    console.log(`DB CONNECTED ${Name}`)
})("Affan")


var name = "Affan";

(()=>{
    var name = "Ali"
    console.log(`Hello ${name}`);
    
})()

name = "Ahmed";


 function user(){

    var name = "Ali";
    return(`Hello ${name}`)
 }



 function userTwo(){
    name = "Affan";
    return(`Hello ${name}`)
 }
console.log(user());

    console.log(userTwo());

    console.log(name);
    

(()=>{
    let name = "Ali";
    function userOne(){
        let name = "Affan";
        return(`Hello ${name}`)
    }

    function userTwo(){
        let name = "Ahmed";
        return(`Hello ${name}`)
    }

    console.log(userOne());
    console.log(userTwo());
    console.log(name);
    
})();