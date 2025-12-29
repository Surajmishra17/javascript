// for-of
const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for(const greet of greetings){
    // console.log(`Each char is ${greet}`)
}

// maps
const map = new Map()
map.set('IN','India')
map.set('USA','United States of America')
map.set('Fr','France')

// console.log(map)

for (const [key,value] of map) {
    // console.log(key, '->', value)
}

const myObj = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// for (const games of myObj) {
//     console.log(games)
// }

for (const key in myObj) {
    // console.log(`${key} is game of ${myObj[key]}`)
}

// for-of loop directly take value but for in take keys

const prog = ["JS","CPP","RUBY",'PYTHON']
for (const key in prog) {
    // console.log(prog[key])
}

// for-each
prog.forEach(ele => {
    // console.log(ele);
});

function pr(prog){
    console.log(prog)
}

// prog.forEach(pr) // provide function reference only 

prog.forEach((ele,index,arr) => {
    // console.log(ele, index, arr);
});

const nums = [
    {
        languagename : "Java",
        support : "java"
    },
    {
        languagename: "C++",
        support: "c++"
    },
    {
        languagename: "Javascript",
        support: "js"
    }
]

nums.forEach((items)=>{
    console.log(items.languagename)
})