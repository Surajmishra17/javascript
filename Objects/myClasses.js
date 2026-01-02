class User{
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

// const n = new User("John","john@gmail.com","123")
// console.log(n.encryptPassword())
// console.log(n.changeUsername())

// behind the seen

function user(username,email,password){
    this.username = username
    this.email = email
    this.password = password
}

user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

user.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const n = new user("John", "john@gmail.com", "123")
console.log(n.encryptPassword())
console.log(n.changeUsername())