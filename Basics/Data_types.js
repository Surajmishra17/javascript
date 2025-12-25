let num = 5
let Name = "alex"
let str = `alex + ${1+2}`

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)

console.log(num)
console.log(Name)
console.log(str)