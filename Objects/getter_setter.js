class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(val){
        this._email = val
    }
    get password(){
        return `${this._password}John`
    }
    set password(val){
        this._password = val
    }
}

const n = new User("John@gmail.com","abc")
console.log(n.password)
console.log(n.email)