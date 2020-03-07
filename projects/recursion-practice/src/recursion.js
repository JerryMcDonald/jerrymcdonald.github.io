// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  // check for negative numbers
  if (n < 0) {
    return null;
  }
  
  // base case will be n === 0 or 1
  if (n === 0 || n === 1) {
    return 1;
  }
  
  
  return n * factorial(n - 1);
  
  
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  // base case will be no more array
  if (array.length === 0) {
    return 0;
  }
  // gogo recurion add the current index send back array sliced
  return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// 4. Check if a number is even.
var isEven = function(n) {

  // make that number positive
  n = Math.abs(n);

  // base case will be n === 1
  if (n === 0) {
    return true;
  }
  
  // if less then 2 return false
  if (n < 2) {
    return false;
  }
  // gogo recursion get the boolean value, send back n - 2
  return Boolean(true * isEven(n - 2));

  
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21

var sumBelow = function(n) {
  // base case will be n === 0 
  if (n === 0) {
    return 0;
  }
  // account for a negative n
  if (n < 0) {
    n = n + 1;
  }
  // account for a positive n
  if (n > 0) {
    n = n - 1;
  }
  // return n and add recursoin 
  return n + (sumBelow(n));
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  // base case will be equal numbers
  if (x === y || x === y - 1 || x === y + 1) {
    return [];
  }

  // check for x less than y
  if (x < y) {
    return [].concat(x + 1, range(x + 1, y));
    
  }

  // check for y less than x
  if (y < x) {
    return [].concat(x - 1, range(x - 1, y));
  }
 
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  // base case will be no more exp
  if (exp === 0) {
    // complete the recursion
    return 1;
  }

  if (exp > 0) {
  // return the base times recursion on the exp minus 1
  return base * exponent(base, exp - 1); 
  }

  // if the exponent is negative we need to math more
  // use toFixed so our decimal is not to long
  // use parseFloat to remove the extra zeros
  return parseFloat(1 / base * exponent(base, exp + 1).toFixed(6));
    
  };

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  // check for a given zero
  if (n === 0) {
    return false;
  }
  
  // see if the remainder is 0 after % 2
  if (n % 2 === 0) {
    // return the boolean value times poweroftwo * 2
    return powerOfTwo(n / 2);
  }
  
  // check for a given 1 and a recursino value of 1
  if (n === 1) {
    return true;
  }
  
  // if the code gets here we need to return false
  return false;
};


// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  // base case will be no more string
  if (string.length === 0) {
    return '';
  }
  
  // concat the last letter and slice the last letter off tru recursion
  return string[string.length - 1] + reverse(string.slice(0, -1));

};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  // base case will be one more letter
  if (string.length === 1) {
    return true;
  }
   
  // remove spaces
  string.split(' ').join();
  
  // check if both ends are not equal
  // convert to lower case to ignore uppercase letters.
  if (string[0].toLowerCase() !== string[string.length - 1].toLowerCase()) {
    return false;
  }
  // return the boolean value of true and gogo recursion taking
  //    off both the first and last index. 
  return Boolean(true + palindrome(string.slice(1, -1)));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.

// check for both zeros
// then check for y < 0 (if both are neg it will compute the same)
// both or pos. or just x neg will compute the same.
// I HAD TO DELETE MY PSUDO CODE FOR THIS TO PASS
var multiply = function(x, y,) {

  
  if (x === 0 || y === 0) {
    return 0;
  }

  
  if (y < 0) {
    
  return -x + multiply(x, y + 1);
  }

  
  return x + multiply(x, y - 1);
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {

  // base case will be no more strings
  if (str1.length === 0 && str2.length === 0) {
    return true;
  }

  // if the current index is not equal then return false
  if (str1[0] !== str2[0]) {
    return false;
  }
  // return the boolean value of true times the recursive value
  // of the rest of the string
  return Boolean(true * compareStr(str1.slice(1), str2.slice(1)));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){

  // base case will be no more string
  return str.length === 0 ? [] : 
  // gogo recursion concat a new array
  // and slicing the last index off the string
  [].concat(str[0], createArray(str.slice(1)));
};

// 17. Reverse the order of an array
var reverseArr = function (array, newArr = []) {
  // base case will be no more length in array
  if (array.length === 0) {
    return [];
  }
  // return our new array with the last index first,
  // then use recursoin to reduce the index
  return [].concat(array[array.length - 1], reverseArr(array.slice(0, -1)));
  
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]

var buildList = function(value, length, newArr = []) {

  // base case will be length = 0
  if (length === 0) {
    return;
  }
  // push the value into newArr
  newArr.push(value);
  
  buildList(value, length - 1, newArr);
  // build the array out of the value
  // use recursion and -1 to length
  return newArr;
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value, count = 0) {
  // add one to our count if value matches
  if (array[0] === value) {
    count = count + 1;
  }
  // base case will be the last index
  return array.length === 1 ? count : 
  // if the array is not down to one index we will use recursion 
  countOccurrence(array.slice(1), value, count);

};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  // base case at the last index
  if (array.length === 0) {
    // end the recursion with an empty array
    return [];
  }
  // concat the current index through the call back
  return [].concat(callback(array[0]), rMap(array.slice(1), callback));
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2

var nthFibo = function(n, fiboArr = [0, 1]) {
  // if n is negative return null
  if (n < 0) {
    return null;
  }
  
  if (n === 0) {
    return 0;
  }
  
  // stop the recursion when fiboArr is correct length
  if (n === fiboArr.length - 1) {
    // return the desired index
    return fiboArr[n];
  }
  
  
// add the last two index together to make the next index
fiboArr.push(fiboArr[fiboArr.length - 1] + fiboArr[fiboArr.length - 2]);

// gogo recursion to make our Fibonacci array
return nthFibo(n, fiboArr);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
  // base case will be no more words in the array
  if (input.length === 0) {
    return input;
  }
  // make our new array have the current index capped then concat the rest with recursion
  let newArray = [].concat(input[0].toUpperCase(), capitalizeWords(input.slice(1)));
  // return our new array
  return newArray;
};




// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  // base case will be no more indexs in array
  if (array.length === 0) {
    // end the recursion
    return array;
  }
  
  // make a new array with the first word capped
  // concat the rest of the array using recursion
  let newArray = [].concat(array[0][0].toUpperCase() + array[0].slice(1), capitalizeFirst(array.slice(1)));
  
  
  // return our new array we created
  return newArray;
};





// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10

// Given an object with nested objects
// return the sum of all even elements
var nestedEvenSum = function(obj, sum = 0) {
// the base case will be no more keys
// if (Object.keys(obj).length === 0) {
//   // at the end of my object recursion I want to return the sum
//   return sum;
// } 

// // Loop through the keys 
// for (var key in obj) {
// // check if the key is an object
// if (typeof(obj[key]) === 'object') {
// sum = nestedEvenSum(obj[key], sum);
// }
// // If the current element is not a key then check if it is even
// if (obj[key] % 2 === 0) {
//   // if it is even we need to add it to the sum
//   sum = sum + obj[key];
// }

// }
// // This is the final end of the function
// return sum;

};


// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj, count) {
  // make the base case no more letters in str
  if(str.length === 0) {
    return str;
  }

  // on the first run set obj as an object
  if (count === undefined) {
    obj = {};
  }
  // check if the property exisits
  if (obj.hasOwnProperty(str[0])) {
    obj[str[0]]++;
  }
  // check if it does not exist
  if (!obj.hasOwnProperty(str[0])){
    obj[str[0]] = 1;
  }
  
  // gogo recursion until there are no more strings!
  letterTally(str.slice(1), obj, 1);
  return obj;
  
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
  // base case will be no more numbers
  if (list.length === 0) {
    return list;
  }

  // if the next is a dup. we do not want it
  if (list[0] === list[1]) {
    // gogo recursion skipping the current index
  return compress(list.slice(1));
  }
  // gogo recursion concatinating the current index with the rest. 
  return [].concat(list[0], compress(list.slice(1)));
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
// takes an array and an argument
var augmentElements = function(array, aug) {
  // base case will be no more elements in array
  if (array.length === 0) {
    return array;
  }
  // push the aug into the current element
  array[0].push(aug);
  // gogo recursion on the rest of the array
  augmentElements(array.slice(1), aug);
  // when recursion is complete return the array
  return array;
  
  
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
// callback will be no more indexs
if (array.length === 0) {
  return array;
}

// check for to many zeros
if (array[0] === 0 && array[1] === 0) {
  return minimizeZeroes(array.slice(1));
}
return [].concat(array[0] , minimizeZeroes(array.slice(1)));
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(num, count) {
  
  // Base case will be no more numbers
  if (num.length === 0) {
    return [];
  }
 // if my count is 1...
 if (count === 1) {
   // return the negative number
   return [].concat((-Math.abs(num[0])), alternateSign(num.slice(1), 0));
 }
 // first return the positive and set my count to 1
 return [].concat((Math.abs(num[0])), alternateSign(num.slice(1), 1));
 
};



// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  
  // base case will be no more spaces in the string
  if (str.indexOf(' ') === -1){
    return str;
  }

  // we need to declare word
  let word = '';
  // make a switch statement to check for numbers
  // if str[0] is a number, replace word and jump out of switch
  switch(str[0]){
    case '1': word = 'one'; break;
    case '2': word = 'two'; break;
    case '3': word = 'three'; break;
    case '4': word = 'four'; break;
    case '5': word = 'five'; break;
    case '6': word = 'six'; break;
    case '7': word = 'seven'; break;
    case '8': word = 'eight'; break;
    case '9': word = 'nine'; break;
    default: 
      // If str[0] is not a number then slice up to the space and gogo recursion
      return str.slice(0, str.indexOf(' ')) + ' ' + numToText(str.slice(str.indexOf(' ') + 1));
  }

  // If str[0] is a number then add the coresponding word and gogo recursion
  return word + ' ' + numToText(str.slice(str.indexOf(' ') + 1));
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
