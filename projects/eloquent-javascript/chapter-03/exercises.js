////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// One solution could be to:
//   function min(a,b){
//  return Math.min(a,b); }

//two parameters, both numbers
//If the first is smaller, then return the first, return the second otherwise
function min(firstValue,secondValue) {
  // to hold the lesser value
  let lesserNumber;
  
  // Ternary operator to forgo the if statement
  // include an or equal to operator to account for same #
  // If firstValue is lesser or equal, then lesserNumber becomes firstValue
  firstValue <= secondValue ? lesserNumber = firstValue : 
  // If secondValue is less then lesserNumber becomes secondValue
  lesserNumber = secondValue;
  // return the lesser number
  return lesserNumber;
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// one parameter, a number, find out if it is even. 
function isEven(p1) {
  // simple ternary function including a -0 result
 return p1 % 2 == 0 || -0 ? true : false;
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// Two Inputs, a string and a letter
// Should return how many times that letter appears in that string
function countChars(string, letter) {
  // a numerical variable to hold how many times the letter appears
  let count = 0;
  // loop though the string, beginning at index 0
  for (let i = 0; i < string.length; i++) {
    // if the index is the given letter then add one to count
    if (string[i] == letter) { count++; }
  }
  // send out how many letters there are
   return count; 
  }
  


////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


// one input, a string
// count how many capital letter Bs there are
function countBs(string) {
  // a numerical variable to hold how many times B appears
  let count = 0;
  // loop though the given string by index
  for (let i = 0; i < string.length; i++ ){
    // If the index is a capital B then add one to counter
    if (string[i] == 'B') { count++; }
  }
  // send back how many Bs there are
  return count;
}
  

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
