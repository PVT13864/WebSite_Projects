//! Steps of creating and using a function (Function declaration)

//! Define the function (declared)
// function addNumbers() {
//   //write our code
//   //! Write our code in the function
//   let a = 10;
//   let b = 20;
//   let results = a + b;
//   console.log(results);
// }
// //! Call/use the function //function invocation
// addNumbers();

//Function parameters(inputs)

// function addNumbers(a, b) {
//   let results = a + b;
//   console.log(results);
//   alert(results);
// }

// addNumbers(10, 30);
// addNumbers(100, 400);

//! ===RETURN KEYWORD====
// function addNumbers(a, b) {
//   let results = a + b;
//   return results;
// }

// let ans = addNumbers(10, 30);
// console.log(ans);
// alert(ans);

//! Function Expression
// const addNumbers = function (a, b) {
//   let results = a + b;
//   return results;
// };

// let ans = addNumbers(10, 30);
// console.log(ans);
// alert(ans);

// ! Arrow Function
// const addNumbers = (a, b) => {
//   let results = a + b;
//   return results;
// };

// const addNumbers = (a, b) => a + b;

// let ans = addNumbers(10, 30);
// console.log(ans);

//! anonymous function
//IIF

//declared
// (function () {
//   console.log("Hello");
// })();

// (function (a, b) {
//   let results = a + b;
//   console.log(results);
// })(2, 3);

// ((a, b) => {
//   let results = a + b;
//   console.log(results);
// })(10, 20);

//Default parameters

// const multiply = function (a = 1, b = 2) {
//   const results = a * b;
//   console.log(results);
// };

// multiply(10, 10);

//!====Coding Challenge: Simple Calculator===
/*Create a calculator that performs basic operations like addition, subtraction, multiplication, and division. Use different types of functions, such as function expressions and arrow functions, for each operation */

// Solution
// function add(a, b) {
//   let results = a + b;
//   return results;
// }

// console.log(add(10, 2));

//!Addition
// const add = function (a, b) {
//   let results = a + b;
//   return results;
// };

// console.log(add(10, 2));

const add = (a, b) => {
  let results = a + b;
  return results;
};

// console.log(add(10, 2));

// ! Subtract
// const subtract = (m, n) => {
//   let results = m - n;
//   return results;
// };
// subtract(20, 10);

// ! Multiply
const multiply = (m, n) => {
  let results = m - n;
  return results;
};
multiply(20, 10);

//! Division

const division = (m, n) => {
  let results = m - n;
  return results;
};
division(20, 10);

//!====Coding Challenge: Character Counter Tool===

//Build a small application where users can input text, and the tool displays the length of the text, converts it to uppercase and lowercase, and slices or replaces parts of the text.

//SOLUTION
function characterCount(text) {
  let length = text.length;
  return length;
}

const results = characterCount("Javascript");

const txtToLowerCase = (text) => {
  let lowercase = text.toLowerCase();
  return lowercase;
};

// console.log(txtToLowerCase("NODEJS"));

const txtToUpperCase = (text) => {
  let uppercase = text.toUpperCase();
  return uppercase;
};

// console.log(txtToUpperCase("nodejs"));

const slicedTxt = function (txt, start, end) {
  let sliced = txt.slice(start, end);
  return sliced;
};

//console.log(slicedTxt("NextJS", 0, 2));

//!====Coding Challenge: String Formatter===

//Design a tool that takes user input for a string and applies various transformations, like converting it to lowercase or uppercase, counting characters, finding a word’s index, and concatenating it with another string.

//! SOLUTION
function formatString(str1, str2) {
  let uppercaseStr1 = str1.toUpperCase();
  let lowercaseStr2 = str2.toLowerCase();
  let combined = uppercaseStr1 + " " + lowercaseStr2;
  return combined;
}

//console.log(formatString("Hello", "WORLD"));

//!====Coding Challenge: BMI Calculator===
//Develop a function-based project where users input their height and weight, and the app calculates their BMI using a function that returns the result. Add conditional statements to display health status based on the BMI value.

const calculateBMI = (weight, height) => {
  let bmi = weight / (height * height);
  let status;
  if (bmi < 18.5) {
    status = "Underweight";
  } else if (bmi < 24.9) {
    status = "Normal Weight";
  } else if (bmi < 29.9) {
    status = "Overweight";
  } else {
    status = "Obese";
  }

  return status;
};

calculateBMI(6, 1.75);

//!====Coding Challenge: Student Grading System===
//- Description: Create a simple application that accepts student marks, calculates if the student has passed, failed, or performed exceptionally based on the defined criteria.
//  - Features:
//   - Input for total possible marks and marks obtained.
//   - Calculate if the student has passed (≥ 50%).
//   - Calculate if the student performed exceptionally (≥ 80%).
//   - Compare the student's marks against the class average.
//   - Display results in a user-friendly format.

//! SOLUTION

function studentGradingSystem(totalMarks, obtainedMark, classAverage) {
  let passingCriteria = totalMarks * 0.5; //50%;
  let exceptionalCriteria = totalMarks * 0.8; //80%;
  let hasPassed = obtainedMark >= passingCriteria;
  let hasPerformedExceptionally = obtainedMark >= exceptionalCriteria;
  let isAboveAverage = obtainedMark > classAverage;

  return {
    hasPassed,
    hasPerformedExceptionally,
    isAboveAverage,
  };
}

const results2 = studentGradingSystem(500, 410, 350);
