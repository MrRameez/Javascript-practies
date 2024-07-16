/*  ------ TASK AND ACTIVITIES--------  */

//  Activity 1: Arithmetic Operations   //
//  TASK: 01   to   TASK: 05

function addNumber(a, b) {
  const sum = a + b;
  // console.log("add",sum);
}
addNumber(5, 9); // example use

function subNumber(a, b) {
  const sub = a - b;
  // console.log("subtract",sub);
}
subNumber(33, 10); // example use

function multiplyNumber(a, b) {
  const multiply = a * b;
  //  console.log("multiply",multiply);
}
multiplyNumber(2, 4); // example use

function divideNumber(a, b) {
  const divide = a / b;
  // console.log("divideNumber" ,divide);
}
divideNumber(20, 4); // example use

function findRemainder(a, b) {
  let remainder = a % b;
  // console.log("Remainder:", remainder);
}

findRemainder(10, 3); // Example usage

//  Activity 2:  Assignment Operators  //
//  TASK: 06   to   TASK: 07

let number = 10;
let addSum = 20;

number += addSum;
// console.log(number);

let num = 10;
let subSum = 20;

number -= addSum;
// console.log(number);

//  Activity 3:   Comparison Operators  //
//  TASK: 08   to   TASK: 10

const myNumber = 23;
const myNumber2 = 19;

// console.log(myNumber > myNumber2);
// console.log(myNumber2 < myNumber);

const myCondition1 = 12;
const myCondition2 = 10;

// console.log(myCondition1 <= myCondition2);
// console.log(myCondition1 >= myCondition2);

let str = "23";
let str2 = 23;

if (str == str2) {
  // console.log("ye sahi hai");  // ye type nahi detha ager ager some value hai tu true return kartha hai
} else {
  //console.log("ye sahi hai karo");
}

if (str === str2) {
  //console.log("ye sahi hai");
} else {
  // console.log("ye sahi hai karo"); // ye type bhi detha hai ager value some hai mager type some nahi hai tu false return kartha hai
}

//  Activity 4:  logical Operators  //
//  TASK: 11   to   TASK: 13

let andOperator = 20; // && opertator koi ek falsey value ho tu false return kartha hai

if (andOperator >= 0 && andOperator <= 50) {
    console.log("barbar");
}else{
    console.log("sahi karo");
};


let orOperator = 20;    // || opertator koi ek truethy value ho tu true return kartha hai

if (orOperator >= 230 || orOperator <= 10) {
    console.log("barbar");
}else{
    console.log("sahi karo");
};


// Define a variable
let isRaining = false;

// Use the ! operator to negate the condition
if (!isRaining && false) {
    console.log("It is not raining. You can go outside.");
} else {
    console.log("It is raining. Better stay indoors.");
};


//  Activity 5:  ternary Operators  //
//  TASK: 14
let age = 18;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result); // Output: "Adult"


/* ------------------------------------------complete lesson 2------------------------------------------------*/