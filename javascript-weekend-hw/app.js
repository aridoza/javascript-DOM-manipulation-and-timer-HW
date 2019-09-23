// I. Variables & Datatypes

// A. Q & A
// 1. How do we assign a value to a variable?
// use the assignment operator '=' to assign a value
// ex: const thing1 = 'the thing';

// 2. How do we change the value of a variable?
// we use the assignment operator; variables created with 'let' can be changed to different data types, while 
// variables created with 'const' cannot
// ex: let someNum = 5;
// someNum = 10;

// 3. How do we assign an existing variable to a new variable?
// we can use the assignment operator '=' to assign the value of the existing variable to a new variable
// ex: let num1 = 7;
// let num2 = num1;  // num2 is now equal to 7;

// 4. Remind me, what are declare, assign, and define?
// declare a variable using either the 'let' or 'const' keyword
// assign a value to the variable using the assignment operator '='
// define the data type of the variable (string, number, boolean, array, object) or initialize to null

// 5. What is pseudocoding and why should you do it?
// pseudocoding involves writing out what you want the code to do, using a combination of code and human-readable language
// it helps plan out how your application will work by breaking up your code into smaller chunks, and helps save time when actually coding
// because ideas are planned out better
// it should describe the entire logic of a problem, so you're ultimately transposing it into actual code

// 6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
// Should spend about 75-90% of your time thinking about/planning how you're going to solve a problem, and about 10-25% of your time
// actually typing in the code to solve it




// B. Strings
// 1. Create a variable called firstVariable.
let firstVariable;
// 2. Assign it the value of the string "Hello World"
firstVariable = "Hello World";
// 3. Change the value of this variable to some number.
firstVariable = 5;
// 4. Store the value of firstVariable in a new variable called secondVariable
let secondVariable = firstVariable;
// 5. Change the value of secondVariable to any string.
secondVariable = "Five";
// 6. What is the value of firstVariable?
// firstVariable's value is  5

//2. Create a variable called yourName and set it equal 
// to your name as a string. Then, write an expression 
// that takes the string "Hello, my name is " and the 
// variable yourName so that it returns a new string with them concatenated. 
let yourName = "Ariel";

const greeting = (name) => {
    return "Hello, my name is " + name;
};
greeting(yourName);




// C. Booleans
// Using the provided variable definitions, replace the blanks so that 
// all log statements print true in the console. Answers should all 
// be valid JS syntax and not weird things that don't make sense but 
// happen to print true to the console.

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a !== b);
console.log(c !== d);
console.log('Name' === 'Name');
// // FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false && false && false && false && false || true);
console.log(false === false)
console.log(e === 'Kevin');
console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression)
console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');

