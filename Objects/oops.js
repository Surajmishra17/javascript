const user = {
    username : "John",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        // console.log("Got user details from database")
        // console.log(`Username : ${this.username}`)
        console.log(this)
    }
}

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)

function User(username, loginCount, isLoggedIn){
    this.username = username 
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome back ${username}`)
    }
    // return this
}

const userOne = new User("John",12,true)
const userTwo = new User("Don",11,false)
console.log(userOne.constructor)
// console.log(userTwo)

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
const auto = new Car("Honda", "Accord", 1998);

console.log(auto instanceof Car);
// Expected output: true

console.log(auto instanceof Object);
// Expected output: true
