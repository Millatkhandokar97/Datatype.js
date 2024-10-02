//Arithmetic Operators
//+ - * / %

let a = 20
let b = 3
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//Assignment Operator

a += b
console.log(a);

a -= b
console.log(a);

a *= b
console.log(a);

a /= b
console.log(a);

a %= b
console.log(a);


//Incremental is deferent of 2 type
//1, Pre Incremental; 2, Post Incremental
let c = 20;

console.log(c++);
console.log(c);
console.log(++c);

//Decremental is deferent of 2 type
//1, Pre Decremental; 2, Post Decremental
console.log(c--);
console.log(c);
console.log(--c);




//CompressionStream
// ==
let x = 10
let y = 20
let z = '20'

console.log(x == y);
console.log(x !== y);
console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);

console.log(y == z);
console.log(y === z);
console.log(y !== z);

//Logical Operator

// Logical && and Operator

//true && true = true
//true && false = false
//false && true = false
//false && false = false

let a1 = 10
let a2 = 15
let a3 = 20
let a4 = 25
if(a1 > a2 && a3 > a4){
    console.log('A1 is greater then A2 and A3 is greater then A4');
}
else if(a1 < a2 && a3 > a4){
    console.log('A2 is greater then A1 and A3 is greater then A4');
}
else if(a1 > a2 && a3 < a4){
    console.log('A1 is greater then A2 and A4 is greater then A3');
}
else{
    console.log('A2 is greater then A1 and A4 is greater then A3');
}


// Logical || or Operator

//true || true = true
//true || false = true
//false || true = true
//false || false = false

if(a1 > a2 || a3 > a4){
    console.log('A1 is greater then A2 or A3 is greater then A4');
}
else if(a1 < a2 || a3 > a4){
    console.log('A2 is greater then A1 or A3 is greater then A4');
}

// else if(a1 > a2 || a3 < a4){
//     console.log('A1 is greater then A2 or A4 is greater then A3');
// }
// else {
//     console.log('A2 is greater then A1 or A4 is greater then A3');
// }


// Logical ! Not Operator

console.log(a1 < a2);
console.log(a1 <! a2);
console.log(a1 > a2);
console.log(a1 >! a2);

//Ternary Operator

let a5 = 410
if(a5 % 2 === 0){
    console.log('this is an Even Number');
} else{
    console.log('this is an Odd Number');
}

//same result with one line code

let result = a5 % 2 === 0 ? 'this is an Even Number' : 'this is an Odd Number'

console.log(result);

//Bitwise Operator

// &
// |
// ~
// ^
// <<
// >>

console.log(typeof '', 56,);


