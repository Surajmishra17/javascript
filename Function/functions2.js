function calculate(...num1){ // rest operator to handle multiple values 
    return num1;
}

console.log(calculate(200,300,400,500)) // [200,300,400,500]

function calculate2(val1,val2,...num1){ // rest operator to handle multiple values 
    return num1;
}

console.log(calculate2(200,300,400,500)) // [400,500]

const user = {
    name : "Suraj",
    age : "20"
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and age is ${anyobject.age}`)
}

handleObject(user) // we need to check typesafety
handleObject({
    name : "John",
    age : "30"
})

const myNewArray = [200,400,100,600]
function helper(getArray){
    return getArray[1]
}
console.log(helper(myNewArray))

// use of this

const obj = {
    name : "Sam",
    age : "30",
    welcomeMessage : function(){
        console.log(`${this.name}, welcome back`)
        console.log(this)
    }
}

obj.welcomeMessage()
obj.name = "John"
obj.welcomeMessage()

console.log(this) // {} but in browser console it is windows

// function f(){
//     let u = "Don"
//     // console.log(this)
//     console.log(this.u)
// }

// f()

const t = () => {
    let u = "Don"
    console.log(this.u)
    console.log(this)
}

t()

// arrow function 
const add = (a,b) => { // {} -> return required 
    return a+b;
}
const add2 = (a,b) => (a+b) // () -> no return statement required

const add3 = (a,b) => ({username:"Suraj"})

console.log(add3(3,4))