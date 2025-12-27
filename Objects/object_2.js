// const tinderUser = new Object() -> singleton 
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false;

// console.log(tinderUser)

const regularUser = {
    email : "surajmishra@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Suraj",
            lastname : "Mishra",
        }
    }
}
// console.log(regularUser.fullname?.userfullname.firstname)

const obj1 = {
    1 : "a",
    2 : "b",
}
const obj2 = {
    3 : "a",
    4 : "b",
}

// const obj3 = {obj1,obj2}

// const obj3 = Object.assign({},obj1,obj2) // {} -> optional parameter assign is used to join objects return modified target object {target,source} {}->target other source

const obj3 = {...obj1,...obj2}
// console.log(obj3)

const users = [
    {
        id : 1,
        email : "s@gmail.com"
    },
    {

    }
]

users[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser)) // provide all the info in array data type now we can apply loop other thing
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty("isLoggedIn"))
console.log(tinderUser.hasOwnProperty("isLogged"))

const course = {
    coursename : "Js",
    price : "999",
    courseInstructor : "Suraj"
}

// course.courseInstructor

const {courseInstructor : instructor} = course // destructuring using {}
console.log(instructor)

// key value in string in json
// {
//     "name" : "hullu",
//     "coursename" : "js",
//     "price" : "free"
// }

[
    {},
    {}
]