// literals and properties 
let mysym = Symbol("key1")

let user = {
    name : "Suraj",
    age : 20,
    "likes bird" : true, // we can use multiword property 
    [mysym] : mykey1
}

user.isAdmin = true

console.log(user.name)
console.log(user.age)
console.log(user.isAdmin)

delete user.age
console.log(user.age)

// Square brackets 
// for multiword properties the dot access doesn't work

console.log(user["likes bird"])
delete user["likes bird"]

let key = prompt("What do you want to know about the user?", "name")
// console.log(user.key) -> error
console.log(user[key]) // Suraj (if enter "name") if age is entered then it shows age


// computed  properties 
let fruit = prompt("Which fruit to buy?", "apple")
let bag = {
    [fruit] : 5,
};
console.log(bag.apple)

// Property value shorthand
function makeUser(name,age){
    return{
        name, // name : name
        age, // age : age
    }
}
let u = makeUser("John",30)
console.log(u.name) //John

// __proto__ 

let animal = {
    eat : true,
}
let rabbit = {}

rabbit.__proto__ = animal // inherit animal it is not used as it is slow 

rabbit.getPrototypeOf(animal);   // read prototype
Object.setPrototypeOf(obj, proto); // set prototype

console.log(rabbit.eat) // true

// for-in loop
for(let key in user){
    console.log(key) // name,age,isAdmin
    console.log(user[key]) // John 30 true
}