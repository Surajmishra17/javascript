class user{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username : ${this.username}`)
    }
    static createId(){
        return `123`
    }
}

const n = new user("John")
// console.log(n.createId())

class Teacher extends user{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const m = new Teacher("Don","don@gmail.com")
// m.logMe()
console.log(m.createId())