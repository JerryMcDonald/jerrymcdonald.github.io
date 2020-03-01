// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function(value) {
    return value;
};

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

  // Given a value, return the datatype
_.typeOf = function(value) {
   if (value === null){
        return 'null';
        // Return arrays
    } else if (Array.isArray(value)) {
        return 'array';
        // return dates
    } else if (value instanceof Date){
        return 'date';
        // return objects
    } else if (typeof value === 'object'){
        return 'object';
        // for everything else return the value 
    } else {
        return typeof value;
    }
};


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

// Given an array and a number
_.first = function(array, number) {
    // check if the array is not an array or a negative number
    if (_.typeOf(array) != 'array' || number < 0) {
        // return array
        return [];}
    // if number is not given or not a number, return the first element of the array
    if (number === undefined || _.typeOf(number) != 'number' ) {
        return array[0];
        }
        // return the array sliced at the number
        return array.slice(0, number);
};




/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

// Given and an array and a number return the indexs up to the given number except 
// starting from the end. 
_.last = function(array, number){
    // check if the array is not an array or a negative number
    if (_.typeOf(array) != 'array' || number < 0) {
        // return array
        return [];}
    // if number is not given or not a number, return the last element of the array
    if (number === undefined || _.typeOf(number) != 'number' ) {
        return array[array.length - 1];
        }
        // return the array sliced at the number
        return array.slice(-number, array.length);
};



/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

// Given two values
_.indexOf = function (array, value) {
    
    
    // return indexOfValue;
    // create a for loop checking each index is equal to the value
    for (let i = 0; i < array.length; i++) {
        // if the given value matchs the value at the index then return the index
        if (array[i] === value){ return i; }
    }
    // If the given value is not in array, then return -1
    return -1;
    
};
    
    
 
/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

// Given an array and a value
_.contains =  function (array, value) {
    
    //  Using a Ternary Operator and _.indexOf. Find out if the value
    //  is included in the array.
    return _.indexOf(array,value) >= 0 ? true : false; 
};  



/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/



_.each = function(collection, action) {
    
    // Check if the colection is an array
    if(Array.isArray(collection)) {
        // If it is an array then use a for loop 
        for(var i = 0; i < collection.length; i++) {
            // perform the given function on the element, it's index, and the array 
            action(collection[i], i, collection);
        }
        
    // If the collection is not an array, then treat it like an object
    } else {
        // loop through each key in the object
        for (var key in collection) {
            // perform the given function on the value, the key, and the object
            action(collection[key], key, collection);
        }
    }
};




/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(array){
    // arr will hold the new array with all the duplicates removed
    var arr = [];
    
    // loop through the given array 
    for (var i = 0; i < array.length; i++){
        
      // Add each existing value to arr. But if the value appears more then once
      // do not add it to arr. 
      if (_.indexOf(array, array[i]) >= 0 && _.indexOf(arr,array[i]) === -1){
        arr.push(array[_.indexOf(array, array[i])]);
      }
    }
    // Done, return arr
    return arr;
    };




/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/


_.filter = function (array, fun) {
    
    // make a new array to hold the true or false values from _.map();
    // _.each should return an array of true and false
    console.log(fun);
    let newTFArray = _.map(array, fun);
    
    // Make a new array to hold those values that return true
    let newArray = [];
    
   for (let i = 0; i < array.length; i++){
       // if there is a true in newTFArray 
       if (newTFArray[i] === true) {
           // Then push that corresponding value from array into newArray
           newArray.push(array[i]);
       }
   }
   // Done, return the newArray
   return newArray;
};


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/


// Given an array and a function
// Return a new array of elements that the filter returned false
// Must use _.filter() in the implementation
_.reject = function (array, fun) {
    
    // Make an array of all the true returned elements from .filter()
    let trueElements = _.filter(array,fun);
    
    // Make an array of all the elements that will return false
    let falseElements = [];
    
    // Loop through the given array
    for (let i = 0; i < array.length; i++) {
        
        // check if each element that is in array is in trueElements
        if (!_.contains(trueElements, array[i])){
            
            // if false returns, then push that element into falseElements
            falseElements.push(array[i]);
            
        }
    }
        return falseElements;
};

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function (array, fun) {
    
    // A new array to hold our two arrays
    let newArray = [];
    
    // Add the true array to newArray
    newArray.push(_.filter(array, fun));
    
    // Add the false array to newArray
    newArray.push(_.reject(array, fun));
    
    // Done, return the new array
    return newArray;
};


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/


// Given a collection and a function
// If the collection is an array. run fun with each element, index, and collection
// If the collection is an object, run fun with each property value, key, and collection
// return the results into an array

_.map = function(collection,fun){
    // create a new array to hold the results
    let newArray = [];
    
    // call the function _.each
    // pass it the given collection and new created function
    // the function will be pushing the results of fun into newArray
    _.each(collection, (element, index, collection) => newArray.push(fun(element, index, collection))); 

    // Done, return newArray
    return newArray;
};
    
 

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function (array, property) {
    
    // create newArray to hold the values of the given property
    var newArray = [];
    
    // run the array though _.map while creating a function that returns the value of property
    newArray = _.map(array, function (element, index, collection){return element[property];} );
    
    
    // Done, return the new array. 
    return newArray;
    
    
    
};



/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function (collect, fun) {
   
   // If fun is not provided or is not a function then...
   if (typeof(fun) !== 'function') {
      // run _.contains on collect and see if false if one of the elements 
      // in collect are falsey
      return !_.contains(collect, false); 
   }
   
    // create a new array to hold the true and false values
    var newArray = [];
    
    // pass to newArray the results of running fun on each element in collect
    // using the _.map function
    newArray = _.map(collect, fun);
    
    // When complete return false if even one of the values in newArray is false
    return !_.contains(newArray, false);
};


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collect, fun){
    
    // If no function is provided then..
    if (typeof(fun) !== 'function') {
      // run _.contains on the collection and see if the elements are truthy
      return _.contains(collect, true); 
   }
   
    // Create a new array to hold the returned trues and falses
    var newArray = [];
    
    // use the _.map function to run fun on each element and return the 
    // values to newArray
    newArray = _.map(collect, fun);
    
    // Now that we have our array of trues and falses we can check if at least 
    // one of the values are true
    return _.contains(newArray, true);
};


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

        // I want to call each in the function
        // I want to run the given function on each element
        // I want to reduce it to one element (accumulator)
        // Each takes a collection and a function that will be ran on each element
        // I will need to create a function that will passed to each
        // that will accumulate each element into one value with the rFun function
        // the collection that ._each() will take is array
        // the function that i want to make will run rFun on each element
        // passing result to accumlator, I am not using seed in the first callback
        // each takes the element index and array


_.reduce = function(array, rFun, seed){
    
    // Our accumulator
    var accumulator;
    
    // accumulator will hold the correct value even if there is no seed. 
    seed == undefined ?  accumulator = array[0] : accumulator = rFun(seed, array[0], 0);
    
    // call back each, pass the return of rFun into accumulator starting at index 1. 
    _.each(array, (element, index, collection) => { if (index != 0) {accumulator = rFun(accumulator, element, index )}}); 
    
    // Done, return accumulator 
    return accumulator;  
    
    
};       
        


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/


_.extend = function (...array){
   
  
   // loop through the array of Objects
   for (let i = 1; i < array.length; i++){
       
         // use the assign method to replace the first object the others
         Object.assign(array[0], array[i]);
     }
     
     // Done, return the first array.
     return array[0];
   };
  


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
