// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
 
 // One parameter
function isArray(value) {
    
    // YOUR CODE BELOW HERE //
    //If an Array is the input parameter the Array.isArray() method will return 
      //true.
    if (Array.isArray(value)){
        return true;
        // if its not an array we return false
    } else {
        return false;
    }
    // YOUR CODE ABOVE HERE //
}




/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
 
 
function isObject(value) {
    
        // only using typeof in my if, else-if statments will not account
        // for null, arrays, and dates.
        
        // First I can use value === null to accout for and remove
        // null.
    if (value === null){
        return false;
        // TAKE OUT ARRAYS ****
    } else if (Array.isArray(value)) {
        return false;
        // TAKE OUT DATES ****
    } else if (value instanceof Date){
        return false;
        // THEN CHECK FOR OBJECTS ****
    } else if (typeof value === 'object'){
        return true;
        // FINALLY ACCOUNT FOR EVERYTHING ELSE ****
    } else {
        return false;
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
 
 
function isCollection(value) {
   
    // YOUR CODE BELOW HERE //
/************************PSUDO*****************************
 * I will use the same code as in isObject but I will allow arrays 
            to return true
 * I also combined some conditions to make a cleaner function
**********************************************************/
     // false for null and dates
     
     // the || logical operator can be used in the condition to 
     // make for less if-else statements.
   if (value == null || value instanceof Date){
     return false;
     // true for arrays or objects
 } else if (Array.isArray(value) || typeof value === 'object'){
     return true;
     
     // false for everything else
 } else {
     return false;
 }
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
 
 // Develop a function with one parameter
 // Return the type of given value
 
 // typeof will work for any value type except for dates, arrays, and null.
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    // first an if statement using instanceof to account for dates
    if (value instanceof Date){
        return 'date';
        // then check for and return arrays
    } else  if (Array.isArray(value)) {
        return 'array';
        // check for and return null
    } else  if (value === null) {
        return 'null';
    } else 
       // typeof value will return strings, objects, undefined, numbers, boolean,
       // and functions. 
        return typeof value;
    }
    
    
    // YOUR CODE ABOVE HERE //


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
