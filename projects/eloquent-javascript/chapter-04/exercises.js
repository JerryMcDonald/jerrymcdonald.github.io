////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// Three intergers as inputs, the first two will be our range
// The third number will be how many numbers to skip by
function range(num1, num2, step) {
  // Create an array to hold the range
  let array = [];
  
  // If no step was given, then make step = 1
  if (!step) {step = 1}

  // First account for num1 and num2 being the same number 
  // or step is zero or a negative value
  if (num1 == num2 || step <= 0 ) { return array; }
  
  // Push our first number before our loop
  array.push(num1);

  // Make our while loop
    while (num1 < num2){
     // Push in our num1 plus the step value
     array.push(num1 + step);
     // Increse our step value as our increment
     num1 += step;
  }
  // Done, return array
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// Input is an array of numbers, return the sum of those numbers
function sum(numbers) {

 // Account for no values in the array, return zero
 if (numbers.length == 0) { return 0; }

 //  totalSum to hold our sum
 let totalSum = 0;

 // Loop our numbers array
 for (let i = 0; i < numbers.length; i++) {
   // Add each index to totalSum
   totalSum += numbers[i];
 }

 // Done, return totalSum
 return totalSum;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// One array Given, return the array reversed.
function reverseArray(array) {

// Create an array to hold the given array reversed
let arrayR = [];

// Loop though given array from the top
for (let i = array.length - 1; i >= 0; i--){
  // push the value of the index (of array) into arrayR
  arrayR.push(array[i]);
}

// Done, return arrayR
return arrayR;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// One array given
// return the SAME array but reversed
// not allowed to create and copy to a new array
function reverseArrayInPlace(array) {

  // A variable to hold half of the array.length
  // rounded down with Math.floor()
  let half = Math.floor(array.length / 2);
  
  // loop through half of the array
  // or 1 less then half if the array length is odd
  for (let i = half; i > 0; i--) {

    // a local variable to hold elements taken out
    // ...named hope because I hope this works
    let hope = 0;
    
    // hope will hold the index being swapped 
    // spliced from the left
    hope = array.splice(half-1, 1);
    
    // unshift the value index spliced from the right
    // access the spliced array with [0]
    array.unshift(array.splice(-half, 1)[0]);
    
    // push hope to the end of array
    array.push(hope[0]);
    
  }
  // Done, return array
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// Given one array, make a 'list'
// A list is an object with nested objects
function arrayToList(array) {

// A local variable to hold our amazing list 
let amazingList = {};

// make our deepest object first with the rest key equal to null
amazingList = { value: array[array.length - 1], rest: null};

// A loop of the array to build the rest of our list
// from the inside out. Beginning at the second to last index
for (let i = array.length - 2; i >= 0; i--){

  // localList in the loop will hold what we have built so far
  // I'm glad the book gave me this tip!
  let localList = amazingList;
  
  // new object with the indexed value and the rest as localList
  amazingList = { value: array[i], rest: localList};
}

// Done, send out our amazingList!
return amazingList;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// Given a list like the one created in arrayToList
// undo all our hard work and make it back into an array
function listToArray(list) {

// Create our amazing array
let amazingArray = [];

// A for loop from the book, thank you book.
// Beginning index will be the whole list
// Condition is true until we reach the last rest value (null)
// index becomes the next nested object at the end of each loop
for (let index = list; index; index = index.rest) {

  // push the value of value into our amazingArray
  amazingArray.push(index.value);
}

// Done, lets return our amazingArray!!
return amazingArray;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(givenValue, list) {
  
  // Return statemnt, making the value object 
  // The given list in the object as the rest value
 return { value: givenValue , rest : list};
 
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// Given a list and a value, return the index the value would appear in an array
function nth(list, givenValue) {
     // create a counter that will begin at 0
     let count = 0;
     
     // We are going to loop through each object in the list
     for ( let listObj = list; listObj; listObj = listObj.rest) {
       
       // If the value in the listObj is equal to the given value
       // return our current count
       if (count == givenValue) { return listObj.value }
       
       // count++ each loop
       count++;
      }
      // If the value is not in the list then return undefined
      return undefined;
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(valueA, valueB) {

  // Do a simple comparison to check for simple data types
  if (valueA === valueB){
    return true;
    // if not strict equal and one is not an object return false
  } else if (typeof valueA != 'object' || typeof valueB != 'object') {
    return false;
    // check for two nulls
  } else if (valueA === null && valueB === null){ return true}


  // Now we need to loop through and check the objects properties
  // make sure we are not dealing with those pesky nulls 

  // Both values are objects and are not equal to null then we will contine the if, if-else chain
  if ((typeof valueA === 'object' && valueA != null) && (typeof valueB === 'object' && valueB != null)) {
    // make sure thay have the same number of keys
    if ( Object.keys(valueA).length != Object.keys(valueB).length) {return false}

    //  We need to cycle through the keys and compare 
    // (keys are strings)
    for (let key in valueA) {
      // check if valueB has the same key with .hasOwnProperty()
      if (valueB.hasOwnProperty(key)) {
        // If the keys match we will run the values 'Recursively'
        // back though the function deepEqual()
          if (! deepEqual(valueA[key], valueB[key]) ) {
          // If they do not pass recursion return false
          return false;
        }
        //if hasOwnProperty() fails then return false 
      } else {return false;}
    }
    return true;
  }
  return false;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
