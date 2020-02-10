// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
 
 
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  // We are given an input Array as our parameter, 
  // loop forward over the Array and print its values
  
  // for loop with less than the array index length
  // as its condition. 
  
  for (var index = 0; index < array.length; index++){
    // console logging each index
    console.log(array[index]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
 
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  // We are given an input Array as our parameter, 
  // loop backwards over the Array and print its values
  
  // for loop with the array length - 1 as its beginning
  // index. greater than or equal to zero as its condition.
  
   for (var index = array.length - 1; index >= 0; index--){
    console.log(array[index]);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
 
 // one parameter, an object
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // a new array to hold the keys
  var Array = [];
  // a for-in loop, pushing each key into Array
  for (var key in object) {
    Array.push(key);
  }
  // return the full Array
  return Array;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
 
 
 // one parameter, an object
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // a for-in loop, console logging each key
  for (var key in object) {
    console.log(key);
  }
  // YOUR CODE ABOVE HERE //
  
  
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
 
 
 // one parameter, an object
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // a new array to hold the objects values.
  var array = [];
  // for-in loop to cycle each key
  for (var key in object){
    // pushing the value of each key into array
    array.push(object[key]);
  }
  // return full array
  return array;
  

  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
 
 // one parameter, and object
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // a for-in loop to cycle each key
  for (var key in object){
    // console log the value of each key
    console.log(object[key]);
  }
  
  // YOUR CODE ABOVE HERE //
}


/** 
 * Given an input Object, return the length of its key/value pairs
 */
 // one parameter, an object
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  // a variable starting at zero
  var a = 0;
  // at each key add one to var a
  for (var key in object){
    a++;
  }
  // return the total
  return a;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
 
 // one parameter: an object
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
  let arrayy = [];
  // create an array for the object key values
  // a for-in loop pushing each key into our new arrayy
  for (var key in object){
  arrayy.push(object[key]);
  }
  // use a for loop to begin at the last index of arrayy
  // and console.log going down.
  for (var index = arrayy.length - 1; index >= 0; index--){
    console.log(arrayy[index]);
  }
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
