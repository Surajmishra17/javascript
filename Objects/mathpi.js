const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descriptor)
// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI)

const n = {
    name : "John",
    price : 250,
    isAvailable : true,
    orderChai : function(){
        console.log("chai ni bani")
    }
}
console.log(Object.getOwnPropertyDescriptor(n,"name"));

Object.defineProperty(n,'name',{
    // writable : false,
    enumerable : false
})

// console.log(Object.getOwnPropertyDescriptor(n, "name"));

for (let [key,value] of Object.entries(n)) {
    if(typeof value !== 'function') console.log(`${key} : ${value}`)
}