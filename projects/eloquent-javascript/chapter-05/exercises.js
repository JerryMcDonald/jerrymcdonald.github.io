// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(arrayChunks) {
   // an array to hold our full array
   let arrayFull =[];

   // Loop through each array
   for (let i = 0; i < arrayChunks.length; i++) {
   // For each nested array use our newly learned .forEach method
   // push each index of each array into arrayFull
   // this is my first time using =>
   arrayChunks[i].forEach(a => arrayFull.push(a));
   }
   return arrayFull;
} 

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

// The inputs will be a starting number, an ending function, an increment function
// and a function to perform on each increment
function loop(starting, ending, increment, functionA) {
  // loop, begin at starting, end at ending.
  for (let i = starting; ending(i); i = increment(i)){
    // perform given function on each increment
    functionA(i);
  }

}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

// Given an array and a function
// determine if each index returns true from the function
function every (arr, testFunctionA) {

  // a new array to hold true or false values
  let tFArray = [];
  // the forEach() method to check each index
  arr.forEach(a => tFArray.push(testFunctionA(a)));
  // check for any false values in tFArray
  for (let element of tFArray){
   if (element == false) return false;
  }
  return true;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

// KAELYN:
// I honestly had trouble with this one, some of the code is copied but I tried 
// to explain it as best as I could.

// we need this function to determine the script of the given character code
function characterScript(code) {
  for (let script of SCRIPTS) {
      // The following code will check each character of the given code for script type
    if (script.ranges.some(([from, to]) => code >= from && code < to)) {
      // if all script types match then return the found type                                        
      return script;
    }
  }
  // if the script types in the given code does not match return null
  return null;
}

// this countBy function expects a collection and a function that
// will create a group name for each element
function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function dominantDirection(text) {
    // scriptNames will hold an array of objects
    // each object will the type of script and the character count
    //    that matches the script
    let scriptNames = countBy(text, char => {
        // characterScript will run on each code point and assign the script type
    let script = characterScript(char.codePointAt(0));
    // A Ternary Operator, 
    // if script is true ? assign the direction to name : else, assign 'none'
    return script ? script.direction : "none";
    // The .filter method will return an array of all the script names
    //    not equal to name
  }).filter(({name}) => name != "none");
  
  // scriptNames is now an array of script types found in the given text
  switch (scriptNames.length) {
      // if no script types found return 'no dominant direction found'
    case 0:
      return 'no dominant direction found';
      // if just one script type is found then return that script type
    case 1:
      return scriptNames[0].name;
      // if more then one type is found then we need to reduce and count how many
    default:
      // if the text has the same number of each character type return 'no dominant direction found'
      if (scriptNames.reduce((acc, cur) => acc.count === cur.count)) {
        return 'no dominant direction found';
      } else {
          // reduce and find the count of each character
          // return the character with the highest count
        return scriptNames.reduce((acc, cur) => acc.count >= cur.count ? acc.name : cur.name);
      }
  }
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
