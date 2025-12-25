// FOR loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// while loop
let i1 = 0;
while (i1 < 5) {
    console.log(i1);
    i1++;
}

//do-while
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);

// for-of
for (const x of [10, 20, 30]) {
    console.log(x);
}

//for-in
const obj = { a: 1, b: 2 };
for (const key in obj) {
    console.log(key, obj[key]);
}

// Known count → for

// Condition - based → while

// Must run once → do...while

// Array / string values → for...of

// Object keys → for...in

// map()
const nums = [10,20,30,40]
const nums2 = nums.map(n=>n*2) // 20 40 60 80

// Filter()
const nums3 = nums.filter(n=>(n>20)) // 30 40

// reduce() = repeatedly combine values until ONE result remains
nums.reduce((acc,curr)=>acc+curr,0) // 100

