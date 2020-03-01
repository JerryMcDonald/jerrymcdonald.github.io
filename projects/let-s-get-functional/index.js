// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-jerrymcdonald");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
return _.filter(array, function(customerObj){
    return customerObj.gender === 'male';
}).length;
};


// Find the number of female customers using the reduce function 
var femaleCount = function (array){

// Set a counter to 0
let count = 0;

// Use reduce passing a function adding one to counter if 
// gender is equal to female.
count = _.reduce(array, function(accumulator, nextItem){

    if (nextItem.gender === 'female'){
    // add one to count if customer is female
    return accumulator + 1;
    }
    // leave the count alone for males
    return accumulator;
}, 0);

// Done, return the count.
return count;


};

// let luckyAdd = daysOfTheWeek.reduce(function(accumulator, nextItem) {
//   return accumulator + nextItem.luckyNumber;
// }, 0)


// Given an array, return the oldest customer
var oldestCustomer = function (array) {
   // Start with age at 0
   let oldestAge = 0;
   // create oldestName
   let oldestName = '';
   
   // use .each to cycle through the customers
   _.each(array, function(element, i){
       if (array[i].age > oldestAge){
           // set the oldest age and name to the current top
           oldestAge = array[i].age;
           oldestName = array[i].name;
       }
   });
   // Done, return the oldestName
   return oldestName;
};



// Given an array, find the youngest customer
var youngestCustomer  = function (array) {
   // create the name and start age at 100
   let name = '';
   let youngestAge = 100;
   
   // use each to cycle though customers
   _.each(array, (element, i) => {
       if (array[i].age < youngestAge){
           // set age and name to current youngest
           youngestAge = array[i].age;
           name = array[i].name;
       }
   });
   
   // Done, return name. 
   return name;
};

// Find the average balance of all the customers, given an array of customers
// No constraints, but try to use map and reduce. 

var averageBalance = function (array) {
    
    // Add a count for how many customers there are
    let count = 0;
    // This will hold the current balance in my loop
    let balNum = 0;
    // This will hold the balance as an array for ($,) removal
    let balArray = [];
    
    
    
  let totalBalance = _.reduce(array, function (accumulator, nextItem) {
      
      // I have to convert the string to a number
      
      // I need to remove the $ and , from each balance. 
      // split balance to an array for easy edit
      balArray = nextItem.balance.split('');
      
      // use map to make an array of ($,) removed
      balArray = _.map(balArray, function (element, index, collection){
          if (element === '$' || element === ','){
              return;
          }
              return element;
      });
      
      // Join the new array together and convert to a number
      balNum = Number(balArray.join(''));
      // Add one to the customer counter
      count++;
      // Add balNum to my accumulator
      accumulator = accumulator + balNum;
      return accumulator;
  }, 0);
  
  // Done, return the totalBalance divided by the count
  return totalBalance / count;
};


// Given an array and a letter, find out how many customers names
// begin with that letter.
var firstLetterCount = function (array, letter){
    // Use reduce
    return _.reduce(array, (accumulator, nextItem) => {
        // Check for the letter, both upper and lower case.
        if (nextItem.name[0] === letter.toUpperCase() || nextItem.name[0] === letter.toLowerCase()){
            // If it is the first letter then add one to the counter
            return accumulator + 1;
        } 
        // else do not add one.
        return accumulator;
    }, 0);
};

// Given an array, a customer, and a letter - find out how many of their
//  friends names start with the letter.
var friendFirstLetterCount = function (array, customer, letter){
    // create a counter 
    
    // Use reduce 
    return _.reduce(array, (accumulator, nextItem) => {
        // check if the given name matches
        if (nextItem.name === customer){
            // If it does then look at the friends list
            
            // Use reduce again
            return accumulator + _.reduce(nextItem.friends, (accumulator2, nextItem2) => {
                // Check the friends first letter
                // Both upper and lower case
                if (nextItem2.name[0] === letter.toUpperCase() || nextItem2.name[0] === letter.toLowerCase() ) {
                    // If friend starts with letter add one
                    return accumulator2 + 1;
                } else 
                return accumulator2;
            }, 0);
        }
        // If the customer name did not match then do nothing. 
        else return accumulator;
    }, 0);
    
    
};
    

// Given an array of customers and a customer
// Return the names that have the given customer in their friends list
var friendsCount = function (array, customer){
    
    // name will hole the return item
    let names = [];
    
    // Use reduce just to access each friends list
    _.reduce(array, (accum, next) => {
        // Second reduce will check each friends list
        _.reduce(next.friends, (accum2, next2) => {
            // If the given customer is on the friends list...
            if (next2.name === customer) {
                // Push the main customers name onto names array
                names.push(next.name);
                return accum2;
            }
            return accum2;
        },0);
        return accum;
    }, 0);
    // Done, return our names array
    return names;
};

// Given an array, find the 3 most common tags.
var topThreeTags = function (array){

    // Create an array of all the tags 
    let allTags = [];
    // Create an array to hold the count
    let numberArray = [];
    // Create an array for the top three names
    let topThree = [];

    // use reduce to access each customer
    _.reduce(array, (accum, next) => {
        // Add all the tags to allTags with concat
        allTags = allTags.concat(next.tags);
        return accum;
    }, 0);
    
    // remove the duplicate tags with _.unique
    allTags = _.unique(allTags);
    
    // Add zeros to numberArray until it is the same length as allTags
    _.each(allTags, () => {
        numberArray.push(0);
    });

    // Use redice to search array...
    _.reduce(array, (accum, next) => {
        // While in array...
        // Use .each to cycle through allTags
        _.each(allTags, (element, index) => {
            // If the tag is in the customers tags...
            // Using .indexOf to check
            if (_.indexOf(next.tags, element) >= 0) {
                // Add a count to the corresponding index in numberArray
                numberArray[index]++;
            }
        });
    }, 0);
    
    // numberArray now holds the count of each tag, and the indexs correspond.
    
    
    // create a counter
    let count = 0;
    
    // Find the highest count in numberArray
    // Add that corresponding tag from allTags to topThree[0].
    _.each(numberArray, (element, index) => {
        // check if element is greater then count
        if (element > count) {
            topThree[0] = allTags[index];
            // change the count
            count = element;
        }
    });
    
    // reset count
    count = 0;
    
    // Find the second highest count. 
    // Add the corresponding allTags to topThree[1]
    _.each(numberArray, (element, index) => {
        // also include a check for top tag
        if (element > count && allTags[index] !== topThree[0]) {
            topThree[1] = allTags[index];
            count = element;
        }
    });
    
    // reset count a last time
    count = 0;
    
    // Find the third highest and add to topThree[2]
    _.each(numberArray, (element, index) => {
        // include an .indexOf to check topThree
        if (element > count && _.indexOf(topThree, allTags[index]) === -1) {
            topThree[2] = allTags[index];
            count = element;
        } 
    });
    
    // Lord Jesus thank you for giving me the wisdom to do this. 
    return topThree;
};

// Given an array, output a summary of genders
// Use reduce
var genderCount = function (array) {
    // The object needs to include a male count, female count, and a non-binary count. 
    // Create our object of genders. 
    let genderSum = {
        male: 0,
        female: 0,
        'non-binary': 0,
    };
    
    // Use reduce to cycle through customers
    _.reduce(array, (accum, next) => {
        // Check the gender and add one to corresponding key in genderSum
        genderSum[next.gender]++;
        return accum;
    }, 0);
    
    // Compared to topThreeTags this was easy, lol.
    return genderSum;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;