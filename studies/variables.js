
/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration and assignment //

var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

// 2. var, let, and const //
// The main difference between the three variable declaration types is the var is function scoped while 
// let and const are block scope. What this means is that when you declare a variable with var inside of 
// an if statement or for loop, the variable will be accessable outside of the code block. 

   // The variable a will be accessable outside of this if statement. 
   if (myVariable === 1) {
       var a = '5';
     }
   console.log(a); // prints 5
  
   // This variable b can be accessed outside of this for loop. 
   for (let i = 0; i <= 5; i++){
       var b = i;
   }
   console.log(b); // prints 5
   
   // but being function scoped a variable declared by var inside a function is
   // accessable outside of its code block. 
   function varBlock(){
       var c = 10;
       c++;
       return c;
   }
   //console.log(c) // returns a reference error 
   
// variables declared with let and const act the same when it comes to being code
// blocked, the only difference being that a variable declared with const is 'immutable'
// meaning that when it is assigned a variable it cannot be changed.

const immutable = 007;
// immutable = 008; // will return type-error, assignment to a constant variable.

// now that we know the difference between let and const we can talk about thier 
// similarities, being code blocked. Like function blocked but they can also not be
// accessed outside of if statments and for loops. 
   
   // This variable d will not be accessable outside of this if statement
   if (myVariable === 1) {
       let d = '5';
     }
   //console.log(d); // reference error: d is not defined 
   
   // The same goes with const inside of a for loop
   for (let i = 0; i <= 5; i++){
       const e = i;
   }
   //console.log(e); // reference error: e is not defined

// and like variables identified by var. let and const are functioned blocked. 


// 3. Hoisting //
// Hoising in Javascript is where variable declarations are 'hoisted' (moved) to 
// the top of the code block. But a note of importance is that only variables that
// are declared are hoisted and accessable. Initialized variables are not. 

hoistedvar = 6;
// declare not initialize 
var hoistedvar;
console.log(hoistedvar); // prints 6

// another example
undefinedVar = 6;
var undefinedVar = 001;
console.log(undefinedVar); // prints undefined

// let and const variables are hoisted to the top of their code block as-well 
// when declared. But they will not be accessable like with the var keyword.

//
//notAccessable = 6; // reference error - notAccessable is not defined
// console.log(alsoNotAccessable); // reference error
let notAccessable;

const alsoNotAccessable = 1;
