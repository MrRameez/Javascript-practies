/*  ------ TASK AND ACTIVITIES--------  */

//  Activity 1:  If-Else Statements   //
//  TASK: 01   to   TASK: 02


const number = Number(prompt())
if (number >= 0) {
    console.log("Its a number");
} else {
    console.log("Its not a number");
};

if (number < 0) {
    console.log("Its a number");
} else {
    console.log("Its not a number");

};

if (number === 0) {
    console.log("Its a number");
} else {
    console.log("Its not a number");
}



const age = Number(prompt("Enter your age "));
if (age >= 18) {
    console.log("you are eligible for vote");
} else {
    console.log("you are not eligible for vote");

}



//  Activity 2:  If-Else Statements   //
//  TASK: 03


function largestNumber(a, b, c) {
    if (a >= b) {
        if (a >= c) {
            console.log("The largest number is:", a);
        } else {
            console.log("The largest number is:", c);
        }
    } else {
        if (b >= c) {
            console.log("The largest number is:", b);
        } else {
            console.log("The largest number is:", c);
        }
    }
    // return largestNumber();
};


// example usage:

largestNumber(0, 4, 3);  // The largest number is: 4
largestNumber(5, 20, 34);  // The largest number is: 34
largestNumber(20, 30, 10);  // The largest number is: 30


//  Activity 3: Switch Case  //
//  TASK: 04   to   TASK: 05

let day = 0;
switch (day) {
    case 1:
        console.log("today is monday");
    break;
    case 2:
        console.log("today is tuesday");
    break;
    case 3:
        console.log("today is Wenesday");
    break;
    case 4:
        console.log("today is tursday");
    break;
    case 5:
        console.log("today is friday");
    break;
    case 6:
        console.log("today is statarday");
    break;
    case 7:
        console.log("today is sunday");
    break;
    default:
        console.log("Enter valid date");
        
};



let grade = Number(prompt());

switch (true) {
    case (grade >= 90):
        console.log("your grade is A");
        break;
        case (grade >= 80):
        console.log("your grade is B");
        break;
        case (grade >= 70):
        console.log("your grade is c");
        break;
        case (grade >= 60):
        console.log("your grade is D");
        break;
    default:
        console.log("you are fail");
        break;
}



//  Activity 4: Condition (Ternary) Operator //
//  TASK: 06

function checkEvenOdd(number) {
    let result = (number % 2 === 0) ? "even" : "odd";
    console.log("the number is ", result);
}

checkEvenOdd(3);
checkEvenOdd(6);


//  Activity 3: Combining Condition  //
//  TASK: 07


function checkLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 !== 0) {
            console.log("The year", year, "is a leap year.");
        } else if (year % 400 === 0) {
            console.log("The year", year, "is a leap year.");
        } else {
            console.log("The year", year, "is not a leap year.");
        }
    } else {
        console.log("The year", year, "is not a leap year.");
    }
}

// Example usage:
checkLeapYear(2020);  // The year 2020 is a leap year.
checkLeapYear(1900);  // The year 1900 is not a leap year.
checkLeapYear(2000);  // The year 2000 is a leap year.
checkLeapYear(2021);  // The year 2021 is not a leap year.



/* ------------------------------------------complete lesson 3------------------------------------------------*/