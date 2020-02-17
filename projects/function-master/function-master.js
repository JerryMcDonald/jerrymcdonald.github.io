//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// input is an object
// return the values of the object in an array
function objectValues(object) {
 // local array to hold the vales
 var ourArray = [];
 // key in loop 
 for (var key in object){
     //push each value into ourArray
     ourArray.push(object[key]);
 }
 // Done, return ourArray
 return ourArray;
}
//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Object as input, return the keys as a string
function keysToString(object) {
  // local string to hold our keys
  var string = "";
  // a count var so we know when to add a space
  var count = 1;
  for(var key in object) {
        // count == 1 will be our first word
        if (count == 1){
        // add the key to string
        string += key;
        // count++ for next loop
        count++;
      } else {
        // add a space then the key into our string
        string += ' ' + key;
      }
  }
  // Done, return string
  return string;
  }
  
//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// An object as the input
// Each string value in the object gets added to a new string
function valuesToString(object) {
 // something to hold our new string
 var something = "";
  // a counter for first word
  var count = 1;
  // loop thu the keys
  for(var key in object) {
        // check if the value is a string and if it's first word
        if (count == 1 && typeof object[key] === 'string'){
        // if string then add it to something
        something += object[key];
        count++;
        // if the next value is a string
      } else if (typeof object[key] === 'string'){
        // add a space and string to something 
        something += ' ' + object[key];
      }
  }
  // Done, return something
  return something;
  }
//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// A collection type object as input
function arrayOrObject(collection) {
    // check if collection is an array
    if (Array.isArray(collection)) {
        // if so return array
        return "array";
      // check if collection is an object
    } else if (typeof collection == "object") {
        // if so return object
        return "object";
    }
}
//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// input is one word
// capitalize it
function capitalizeWord(string) {
    // return the word with the first letter .toUpperCase
    // add the rest of the word that was sliced off
    return string[0].toUpperCase() + string.slice(1, string.length);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

// one parameter, a string of words 
// capitalize the first letter of each word
function capitalizeAllWords(string) {
  // make a variable to hold the letter
  // letter will hold the capitalized letter
var letter = '';
  // counter will let us know a first letter is next
var counter = 0;
  // charArr will hold our string as an array for edits
var charArr = [];
   // lets loop through each letter. 
for (var i = 0; i < string.length; i++){
   if (counter == 0){
    // convert the first letter of a word to uppercase
    letter = string[i].toUpperCase(); 
    //convert string to an array so we can modify eaiser
    charArr = string.split('');
    // replace index of array with capital letter
    charArr[i] = letter;
    // convert back to a string
    string = charArr.join('');
    // reset the counter to one until the next space
    counter = 1;
   }
    // The space will let us know a first letter is next in
    //   the loop
    if (string[i] === ' '){
      // reset counter to 0, first letter is next
     counter = 0;
   }
}
// send the completed string out of the function
return string;
}
//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// input is an object that has a name property
function welcomeMessage(object) {
    // A string that holds the return message
    // cap the fist letter of the name key value
    // slice and add the rest of the word
  let string = "Welcome " + object.name[0].toUpperCase() + object.name.slice(1, object.name.length) + "!";
  // return the newly created string
  return string;
}
//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// takes an object and return the name and species values
function profileInfo(object) {
  // add the name value capped
  // add " is a "
  // add the species value capped
  let string = object.name[0].toUpperCase() + object.name.slice(1, object.name.length)
  + " is a " + object.species[0].toUpperCase() + object.species.slice(1, object.species.length);
  
  // Done, return our new string
  return string;
}
//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Takes an object and if it has a noise key, return that noise
// otherwise return "there are no noises"
function maybeNoises(object) {
    // check if the noise key exists, if so check that it has at least one index
    if (object.hasOwnProperty("noises") && object.noises.length !== 0) {
         // If so return the noise
         return object.noises.join(' ');
    } else {
         // If not return no noises
         return "there are no noises";
    }
 }
//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

   // two parameters, a string and a word
   // check if the word is in the string
function hasWord(string, word) {
    // assign x to an interger value
    // it will be a positive number if the word is in the string
    var x = string.search(word);
    // if x is a positive number it is in the string
    if (x >= 0){
        // return true if it is
        return true;
    } else {
        // if a negative value then word is not in the string
        return false;
    }
    }
//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

   // input: a name and an object
   // output: add name to objects friends array
   //         also return the object
function addFriend (name, object) {
    // using dot notation we add name to friends array inside object
    object.friends.push(name);
    // return the object
    return object;
}
//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

    // should take name and an object
    // return true if the name is a friend of the given object
    // false otherwise
function isFriend(name, object) {
    // create an if statement to return false if there is no friends array
    if (!object.hasOwnProperty('friends')){
        return false;
}
    // if there is a friends array, iterate through it
    for (var i = 0; i < object.friends.length; i++ ){
        // create an if statement to see if the name is on the list => return true
        if (object.friends[i] == name){
            return true;
        }
        }
        // if not, return false
            return false;
        }
//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// i: name(single object key) and and array of object(all of the names)
// o: return an array of names that given name arg is not friends with
function nonFriends(name, array) {
    // new array to hold the names that name is not friends with
    var myArr = [];
    // counter will check if name is in friends list
    var counter = 0;
    // first cycle though each object
    for (var i = 0; i < array.length; i++) {
            // reset counter at beginning of loop
            counter = 0;
            // make sure we are not looking in our own friends list
            if (array[i].name !== name){
              // if not cycle through the friends list
              for (var a = 0; a < array[i].friends.length; a++) {
                  // If the name we are given is in the friends list
                  //   we need to add one to the counter
                if (array[i].friends[a] == name) {
                    // increase the counter to one
                  counter++
                }
              }
              // if the counter is still 0 then the name was not inside the
              //   checked friends list.
              if (counter == 0){
                  // push the name in myArr if name was not found
                myArr.push(array[i].name);
              }
            }
    }
    // return our created array
      return myArr;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// three inputs, an object, a key, and a value
function updateObject(object, key, value) {
      // add the key and the value to the object
      object[key] = value;
      // return our object
      return object;
 }


//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// i: object and an array of strings
// o: remove properties on object that are listed in array
// create a for loop to iterate through the array
// use all of the words in the array as potential keys and delete them
function removeProperties(object, array) {
 for (var i = 0; i < array.length; i++) {
     delete object[array[i]];
 }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// i: an array
// o: an array with duplicates removed
// set up a for loop to iterate through the array
  // set up another for loop to iterate through the array at i+1
    // in case there are multiple like entries in a row, set up a while loop
    // while array i = array j keep doing this
      // use the splice method to remove offending pieces from the array
// return the array
function dedup(array) {
 for (var i = 0; i < array.length; i++) {
     for (var j = i + 1; j < array.length; j++) {
         while (array[i] === array[j]) {
             array.splice(j, 1);
         }
     }
 }
 return array;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}