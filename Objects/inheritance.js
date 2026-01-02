class user{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends user{
    constructor(username,email,password) {
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const n = new Teacher("John","john@gmail.com","123")
n.addCourse()

const m = new user("Don")
m.logMe()

console.log(n===m)
console.log(n===Teacher)
console.log(n instanceof Teacher)
console.log(n instanceof user)