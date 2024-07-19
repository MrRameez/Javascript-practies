/*  ------ TASK AND ACTIVITIES--------  */

//  Activity 1: Array Creation and Access  //
//  TASK: 01   to   TASK: 02

const myArr = [1, 2, 3, 4, 5,6,7,8,9,10];
console.log(myArr);

let firstElement = myArr[0];
let lastElement = myArr[4];
// console.log(firstElement,lastElement);


//  Activity 2:  Array Methods (Basic)  //
//  TASK: 03   to   TASK: 06

myArr.push(11);
console.log("Push mathod: ",myArr);
myArr.pop(9);
console.log("Pop mathod: ",myArr);
myArr.shift(0);
console.log("Shift mathod: ",myArr);
myArr.unshift(12);
console.log("Unshift mathod: ",myArr);




//  Activity 3:  Array Methods (Intermediate)  //
//  TASK: 07   to   TASK: 09


let newNumber = myArr.map((num) => num * 2);
console.log(newNumber);



let myNumber = myArr.filter((num) => {
   return num % 2 ===0
})
console.log(myNumber);



let sum = myArr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log("Sum of all numbers:", sum);




//  Activity 4:   Array Iteration  //
//  TASK: 10   to   TASK: 11

for (let i = 0; i < myArr.length; i++) {
    console.log("Element at index", i, ":", myArr[i]);
}


myArr.forEach((element,index) =>{
    console.log(`index: ${index} element: ${element}`);
})


//  Activity 5:  Multi-dimensional Arrays  //
//  TASK: 12   to   TASK: 13

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(matrix);

matrix.forEach((row,index) =>{
    console.log(`Row: ${row} index: ${index}`);
})


const specificElement = matrix[1][0]
console.log(specificElement);



/* ------------------------------------------complete lesson 6------------------------------------------------*/
