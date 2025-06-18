//Imediately Invoked Function Expression (IIFE)

// Named IIFE
(function DB(){
    console.log(`DB CONNECTED`);
    
})();


(()=>{
    console.log(`DB CONNECTED`)
})();

((Name)=>{
    console.log(`DB CONNECTED ${Name}`)
})("Affan")
