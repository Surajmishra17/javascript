// Immediately invoked function execution IIFE
// we use it due to global scope pollution 
// ; -> important to stop function

(function one(){
    // named IIFE
    console.log(`Db is connected`)
})();

( (name) => {
    // Normal IIFE
    console.log(`DB2 connected ${name}`)
} )("Suraj");