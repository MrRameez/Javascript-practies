/*  ------ TASK AND ACTIVITIES--------  */

//  Activity 1:  For Loop  //
//  TASK: 01   to   TASK: 02


for (let i = 1; i <= 10; i++) {
    const element = i;

    // console.log(element);
}


const number = 5;
for (let i = 0; i <= 10; i++) {
    const element = i;
    
    let result = `${number} x ${i} = ${number * i}`;
    // console.log(result);
}


//  Activity 2:  While Loop  //
//  TASK: 03   to   TASK: 04

let number1 = 1;

while (number1 <= 10) { 
//   console.log("Current number:", number1); 
  number1++; 
}




let number2 = 10; // yeh variable number ko initialize karta hai 10 se

while (number2 >= 1) { // jab tak number 1 se bara ya barabar hai
//   console.log("Current number:", number2); // number ko console pe print karte hain
  number2--; // number ko 1 se decrement karte hain
}



//  Activity 2: do... While Loop  //
//  TASK: 05   to   TASK: 06
let myLoop = 1;
do {
    // console.log(myLoop);
    myLoop++
} while (myLoop <= 5);


let Factorial1 = 5
let Factorial = 1;

do {
    Factorial *= Factorial1;
    Factorial1--
} while (Factorial1 > 0);

// console.log(Factorial);

//   Activity 4: Nested Loops
//  TASK: 07


let n = 5;
for (let i = 1; i <= n; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += "*"
    }
    
    // console.log(pattern);
}

//  Activity 5: Loop Control Statements
//  TASK: 08   to   TASK: 09



for (let i = 1; i <= 10; i++) {
    if (i===5) {
        continue;
    }
    console.log(i);
};

for (let index = 1; index <= 10; index++) {
    if (index ===7) {
        break
    }
    console.log(index);
}


/* ------------------------------------------complete lesson 4------------------------------------------------*/