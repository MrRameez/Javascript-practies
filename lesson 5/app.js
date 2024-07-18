/*  ------ TASK AND ACTIVITIES--------  */

//  Activity 1:  Function Declaration  //
//  TASK: 01   to   TASK: 02


function checkOddEven(number) {
    if (number % 2=== 0) {
        // console.log("even",number);
    } else {
        // console.log("odd",number);
    }
};
checkOddEven(8);
checkOddEven(7);


function squerNumber(square) {
    const sum = square * square;
    return sum
};
// console.log(squerNumber(9));



//  Activity 2:   Function Expression  //
//  TASK: 03   to   TASK: 04

function findMaximumNumber(max1,max2) {
    if (max1 > max2) {
        return max1;
    }else{
        return max1
    }
}

let max = findMaximumNumber(121,22);
// console.log(max);


function concatinationString(value1,value2) {
    
    let concat = String(value1) + String(value2);

    return concat;
}
// Examples
// concatinationString(2,2)
// concatinationString("hello ", "world");
// concatenateValues("Number: ", 123);



//  Activity 3:    Arrow Functions  //
//  TASK: 05   to   TASK: 06

const add = (a,b) => {

    let addition = a+b
    return addition;
};
// console.log(add(2,8));

const containsCharacter = (str, char) => {
   const contain = str.includes(char);
    return contain;
};



//  Activity 4:   Function Parameters and Default Values  //
//  TASK: 07   to   TASK: 08

const calculateProduct = (num1, num2) => {
     const product = num1 * num2;
    return product;
};

// console.log(calculateProduct(2,2));


function greetPerson(name, age ) {
    const person = `Hello, ${name}! You are ${age} years old.`;
    return person
};

// console.log(greetPerson("rameez",18));




//  Activity 5:  Higher-Order Functions  //
//  TASK: 09   to   TASK: 10


function callFunctionNTimes(func, n) {
    for (let i = 0; i < n; i++) {
      func(); // Call the provided function 'func' n times
    }
}

// Example usage
function greet() {

    console.log("Rameez Gujjar");

}

callFunctionNTimes(greet, 10); // Calls the greet function 3 times, logs "Hello, world!" thrice




function composeFunctions(func1, func2, value) {
    return func2(func1(value));
}

// Example usage
function double(x) {
    return x * 2;
}

function addOne(x) {
    return x + 1;
}

let result = composeFunctions(double, addOne, 3);
console.log("Result:", result); // Logs: Result: 7  (3 * 2 + 1)




/* ------------------------------------------complete lesson 5------------------------------------------------*/
