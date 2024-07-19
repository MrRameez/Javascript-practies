/*  ------ TASK AND ACTIVITIES--------  */

//  Activity 1: Object Creation and Access  //
//  TASK: 01   to   TASK: 02



let book = {
    tittle: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: "1960"
};

console.log(book);
console.log(book.tittle);
console.log(book.author);



//  Activity 2:  Object Methods  //
//  TASK: 03   to   TASK: 04


let book2 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    getSummary: function() {
        return this.title + " by " + this.author;
    },
    updateYear: function (newYear) {
        this.year = newYear
    }
};


// Log the original book2 details
console.log("Original book details:", book2);

// Log the result of calling the getSummary method

book2.updateYear(2020);




//  Activity 3:   Nested Objects  //
//  TASK: 05   to   TASK: 06


let library = {
    name: "City Library",
    books: [
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960,
            getSummary: function() {
                return this.title + " by " + this.author;
            },
            updateYear: function(newYear) {
                this.year = newYear;
            }
        }
    ]
};

// Log the name of the library
console.log("Library name:", library.name);

// Log the titles of all the books in the library
console.log("Book titles:");
library.books.forEach(book => {
    console.log(book.title);
});




//  Activity 4: The this keyword  //
//  TASK: 07


let book3 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    getSummary: function() {
        return this.title + " by " + this.year;
    }
};
console.log(book3.getSummary());


//  Activity 5: Object Iteration  //
//  TASK: 08   to   TASK: 09



const myObj = {
    name: "Shehzad",
    age: 22,
    smit: "saylani",
    hobbies: ["coding", "dsa", "eating"],
    myBoolean: false,
  };
  
  const myKeyy = "hobbies";
  
  console.log(myObj[myKeyy]); // array will be printed  //
  


  for (const myKeyy in myObj) {
    console.log("each values of obj :>> ", myObj[myKeyy]);
  }

  Object.entries(myObj).forEach(([key, value]) => {
    console.log(key + ": " + value);
});

  


/* ------------------------------------------complete lesson 6------------------------------------------------*/
