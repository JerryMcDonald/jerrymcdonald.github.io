// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */

/************************PSEUDO****************************
 * DEVELOP A FUNCTION that takes one parameter(a string)
 * RETURN the strings length
 ^ The .length property will return how many indexs are in a string
**********************************************************/



function length(string) {
    return string.length;
    // .length will return the # of indexs. 
}



/**
 * Given an input String, return a new String forced to lowercase.
 */

/************************PSEUDO****************************
 * DEVELOP A FUNCTION that takes one parameter(a string).
 * RETURN the string forced to lowercase.
**********************************************************/



function toLowerCase(string) {
return string.toLowerCase();
// The .toLowerCase method will convert all characters in a string to lowercase.
}



/**
 * Given an input String, return a new String forced to uppercase.
 */

/************************PSEUDO****************************
 * DEVELOP A FUNCTION that takes one parameter(a string).
 * RETURN the string forced to uppercase.
**********************************************************/


function toUpperCase(string) {
return string.toUpperCase();
// The .toUpperCase method will convert all characters in a string to uppercase.
}



/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
 
/************************PSEUDO****************************
 * DEVELOP A FUNCTION that takes one parameter(a string).
 * RETURN a new string forced to dash-case.
**********************************************************/ 



function toDashCase(string) {
return string.split(' ').join('-').toLowerCase();
// .split(' ') will split the string into an array at each space
// .join('-') will rejoin the array as a string but with -
}



/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
 
/************************PSEUDO****************************
 * DEVELOP A function that takes two parameters, a string
           and a single character.
 * RETURN  True if the string begins with the character, 
           false otherwise.
**********************************************************/ 



function beginsWith(string, char) {
    // A variable to hold lowercase letters.
var a = string.toLowerCase();
    // A variable to hold uppercase letters.
var b = string.toUpperCase();

//  If statement with both upper and lower case variables of
//   the given string as its condition.
if (a[0] == char || b[0] == char){
   return true;
} return false;
}


/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
 
 /************************PSEUDO****************************
 * DEVELOP A function that takes two parameters, a string
           and a single character.
 * RETURN  True if the string ends with the character, 
           false otherwise.
 - If statement with both upper and lower case variables of
     the given string as its condition.
**********************************************************/ 



function endsWith(string, char) {
var a = string.toLowerCase();
var b = string.toUpperCase();

if (a[a.length - 1] == char || b[b.length - 1] == char){
   return true;
   // .length - 1 property to access the last index of the string
} 
return false;
}



/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
 
/************************PSEUDO****************************
 * DEVELOP A function that takes two parameters (two strings)
 * RETURN  The the two strings concatenated into one
**********************************************************/ 



function concat(stringOne, stringTwo) {
return stringOne.concat(stringTwo);
// The .concat() method can combine two strings
}



/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
 
/************************PSEUDO****************************
 * DEVELOP a function that takes any # of strings
 * RETURN  the strings joined together 
 - Array.from(arguments) will take any # of parameters and
      put them into array args.
**********************************************************/



function join() {
    var args = Array.from(arguments);
    return args.join('');
    //.join() method to return the array args joined as a string
}



/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
 
/************************PSEUDO*****************************
 * DEVELOP a function with two parameters
 * RETURN  the longest of the two
 - if statment to account for the strings being the same 
   length
**************************CODE*****************************/


function longest(stringOne, stringTwo) {
  if (stringOne.length === stringTwo.length){
    return "They are equal in length";
//  An else if with a greater than logical operator to pick 
//    the longest string.
} else if (stringOne.length > stringTwo.length){
    return stringOne;
} else return stringTwo;
}



/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
 
/************************PSEUDO*****************************
 * DEVELOP A function with two parameters, both strings
 * RETURN  1 if stringOne is higher in alphabetical order, -1 
                if stringTwo is higher, 0 if they are equal. 
 - Java wiil consider a word that is alphabetically higher as greater than 
        ex. apple < Banana
 - If stringTwo is greater then that means that stringOne is higher 
        alphabetically, we then return 1. 
**************************CODE*****************************/



function sortAscending(stringOne, stringTwo) {
if (stringOne < stringTwo){
    return 1;
} else if (stringOne > stringTwo){
    return -1;
} else {
    return 0
}
}



/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
 
 /************************PSEUDO*****************************
 * DEVELOP  A function with two parameters, both strings
 * RETURN  1 if stringOne is lower in alphabetical order, -1 
                if stringTwo is lower, 0 if they are equal.
 - Same function as before but with the greater than operator reversed.
**************************CODE*****************************/

function sortDescending(stringOne, stringTwo) {
    if (stringOne > stringTwo){
        return 1;
//        If stringTwo is less than that means that stringOne is lower 
//        alphabetically, we then return 1.
    } else if (stringOne < stringTwo){
    return -1;
    } else {
    return 0;
    }
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
