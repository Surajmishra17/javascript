// Normal function
function add(p, q){
    return p+q;
}

const multiply = function(a,b){
    return a*b;
}

console.log(multiply(10,20))

// Arrow function
const mul = (a,b) => a*b

// callback function
function calculate(a, b, operation) {
    return operation(a, b);
}

calculate(5, 3, (x, y) => x + y); // 8

function ask(question,yes,no){
    if(confirm(question)) yes()
    else no() 
}
function showOk(){
    console.log("yes proceed")
}
function showcancel(){
    console.log("you cancelled")
}
ask("Do you agree",showOk,showcancel)

//function call

welcome() //run
function welcome(){
    console.log("Welcome back")
}

// inside block function call
let t;
if(age>18){
    e() //run
    t = function e(){
        console.log("Eligible")
    }
}

e() // error function not defined outside
t() // now no error