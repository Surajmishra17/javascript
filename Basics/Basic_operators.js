//Exponentiation 

let num = 2**3
console.log(num)

// concatenation with + 

let s = "1" + 2;
let t = 2 + "1";
console.log(s)
console.log(t)

let s2 = "1" + 2 + 2
let t2 = 2 + 2 + "1"
console.log(s2)
console.log(t2)

console.log(6-'2') // 4
console.log('6'/'2') // 3

// Numeric conversion, unary +
//The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.

let x = 1;
console.log(+x); // 1

// Converts non-numbers
console.log(+true); // 1
console.log(+"");   // 0

//It actually does the same thing as Number(...), but is shorter.

let apple = "2", oranges = "3"
console.log(apple+oranges)
console.log(+apple + +oranges)

alert(2 > 1);  // true (correct)
alert(2 == 1); // false (wrong)
alert(2 != 1); // true (correct)

// JS convert the value to number for comparison 
alert('2' > 1); // true, string '2' becomes a number 2
alert('01' == 1); // true, string '01' becomes a number 1

// A strict equality operator === checks the equality without type conversion
alert(0 === false); // false, because the types are different

// null->0 and undefined->NAN are defined for == but they are converted into number when operations are other then == 
console.log(null==0) // false
console.log(null>=0) // true

alert(undefined > 0); // false (1)
alert(undefined < 0); // false (2)
alert(undefined == 0); // false (3)
