////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// THE EASY WAY WOULD BE TO:
//   function min(a,b){
//  return Math.min(a,b); }
// BUT I DONT THINK IT IS ASKING FOR THE EASY WAY


//two parameters, both numbers
//If the first is smaller, then return the first, return the second otherwise
function min(firstValue,secondValue) {
  // to hold the lesser value
  let lesserNumber;
  
  // Ternary operator to forgo the if statement
  // include an or equal to operator to account for same #
  firstValue <= secondValue ? lesserNumber = firstValue : lesserNumber = secondValue;
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


function countChars() {

}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs() {

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
