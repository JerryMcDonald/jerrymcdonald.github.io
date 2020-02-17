
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// function that logs a triangel out of hashs based on given parameter
function triangles(number) {
  
var hash = '';
 // for each number below the given one run the loop
for (let i = 0; i < number; i++){
  // add another hash in each loop
  hash += '#';
  // print the hash var each loop
  console.log(hash);
}
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// Personal challenge : Do not use if statements!!

function fizzBuzz(start, end) {
// starting at index = 1
  // for loop, begin at 1 and loop to 15
for (let i = start; i <= end; i++ ) {
  // A Ternary Operator Chain, begin by accounting for multiples of 3 and 5
  // If true then log <-- 'fizzbuzz'
i % 3 == 0 && i % 5 == 0 ? console.log('fizzbuzz') :
  // Now account for multiples of 3
  // If true then log <-- 'fizz'
i % 3 == 0 ? console.log('fizz') : 
  // Now account for multiples of 5
  // If true then log <-- 'buzz'
i % 5 == 0 ? console.log('buzz') : 
  // log all other numbers as themselves
  // also, this is the end of the Ternary chain
console.log(i); 
}
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// Personal Challenge : Do not use if statements!!

// Our input will be the length and height of our Chessboard
function drawChessboard(a) {
  // cB will hold our chessBoard until we are ready to log
  let cB = '';
  // First loop through the 'height' or 'column' of chessBoard
  // Using the given parameter as the cutoff condition
  for (let c = 1; c <= a; c++ ){
    // Our next loop will create each index of that row
    // The cutoff will be one less then a
    // We will use a Ternary Operator with TWO nested Ternary Operators
    for (let r = 0; r < a; r++){
      // Our Ternary Operator Chain will begin by checking if c is odd
      c % 2 != 0 ? 
      // If c == odd, and r is even  <-- add a space
      // If c == odd, and r is odd   <-- add a hash 
      r % 2 == 0 ? cB += (' ') : cB += ('#') :
      // If c == even, and r is even <-- then add a hash
      // If c == even, and r is odd  <-- then add a space
      r % 2 == 0 ? cB += ('#') : cB += (' '); 
    }
  // We will add a new line break at the end of each row 
     cB += '\n';
  // I could prevent a newline break at the last row, but the test checks for one. 
}
// Log the ChessBoard when we are done. 
console.log(cB);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
