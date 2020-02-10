// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/



// A function with no parameters
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
// a large outer for loop to cycle through each number between 1 to 100.
for (var index = 1; index <= 100; index++) {
    // an if statement with the remainder operator (%) to 
    // account for multiples of 3 and 5
    if (index % 3 == 0 && index % 5 == 0) {
  console.log('FizzBuzz');
    // account for multiples of 3
} else if (index % 3 == 0){
    // account for multiples of 5
  console.log('Fizz');
} else if (index % 5 == 0){
  console.log('Buzz');
} else {
    // if the number makes it though the if, else-if chain then we 
    // simply print the numbers.
    console.log(index);
}
}

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}