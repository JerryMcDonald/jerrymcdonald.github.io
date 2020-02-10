// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
 
/************************PSEUDO****************************
 * DEVELOP A function with one parameter (a string or a 
           number), and two nested functions. 
 * RETURN  A greater than function for eaither a string or
           number.
 - Two if statements that will check the data type of base.
 - return a greater than function in each that include if
    statements and conditions.
 - return "Not a string or number" accordingly 
**********************************************************/
 
 
 
function createGreaterThanFilter(base) {
    if (typeof base === 'number'){
        return function numberGreaterThan(num){
            if (num > base){ return true; }
            else return false};
        }
    if (typeof base === 'string') {
        return function stringGreaterThan(num){
            if (num > base){ return true; }
            else return false;
        };}
    return 'Not a string or a number';
}



/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
 
/************************PSEUDO****************************
 * DEVELOP A function with one parameter (a string or a 
           number), and two nested functions. 
 * RETURN  A less than function for eaither a string or
           number.
 - Two if statements that will check the data type of base.
 - return a less than function in each that include if
    statements and conditions.
 - return 'Not a string or number accordingly
**********************************************************/


function createLessThanFilter(base) {

    if (typeof base === 'number'){
        return function numberLessThan(num){
            if (num < base) { return true; 
            } else return false; };
    }
    if (typeof base === 'string') { 
         return function stringLessThan(string) {
             if (string < base) { return true; }
             else return false; };
    }
    return 'Not a string or a number'; 
}



/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
 
 /************************PSEUDO*****************************
 * DEVELOP A function with one parameter (a single character), 
           and one nested function. 
 * RETURN  A nested function that will test a given string with
           a startsWith character.
 - make two variables in the main function that will hold both
   upper and lower cases of startsWith character.
 - In the nested function is an if statement with two conditions 
   and an or logical operator. This will compare the first index
   of a given string. 
**************************CODE*****************************/
 
 
 
function createStartsWithFilter(startsWith) {
    var upperCase = startsWith.toUpperCase();
    var lowerCase = startsWith.toLowerCase();
    
    return function(string){ 
        if (upperCase == string[0] || lowerCase == string[0]){ return true;} 
        else return false;};
}



/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
 
/************************PSEUDO*****************************
 * DEVELOP A function with one parameter (a single character), 
           and one nested function.
 * RETURN  A function that will test the last character of a
           given string with endsWith
 - two variables in the main funcitn to hold upper and lower
   case.
 - if statement in the nested function that used .length -1
   to access and compare the last letter of the given string. 
**************************CODE*****************************/



function createEndsWithFilter(endsWith) {
    var upperCase = endsWith.toUpperCase();
    var lowerCase = endsWith.toLowerCase();
    
    return function(string){ 
        if (upperCase == string[string.length - 1] || lowerCase == string[string.length - 1]){ return true;} 
        else return false;};
}



/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
 
/************************PSEUDO*****************************
 * DEVELOP  A function taking two parameters, an array and 
            function.
 * RETURN   The given Array, and each string in the array 
            modified by the function.
 - Create two variables (arrayUnModified and arrayModified) so
      we can better understand the problem.
 - For loop with the UnModified arrays length as its conditions.
 - Push each string modified by the given function into the new
      arrayModified variable. 
 *************************CODE*****************************/


function modifyStrings(strings, modify) {
    let arrayUnModified = strings;
    let arrayModified = [];
    
    for (let i = 0; i < arrayUnModified.length; i++) {
        arrayModified.push(modify(arrayUnModified[i]));
    }
    return arrayModified;
}



/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
 
/************************PSEUDO*****************************
 * DEVELOP  A function with two parameters, an Array of strings
              and a function designed to test a string and
              return a Boolean value. 
 * RETURN   A boolean value based on all strings in the Array
              return true in the function
 - new variable Array for ease of operation
 - for loop with index being less than Array.length -1  as 
       its conditions.
 - loop through each string return false if one fails the
       the given method. 
**************************CODE*****************************/



function allStringsPass(strings, test) {
    let Array = strings;
    for (let index = 0; index < Array.length - 1; index++){
        if (test(Array[index]) === false){
            return false;
        }
    }
    return true;
}



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}