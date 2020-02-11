/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {};
// I am adding the key of species to the object animal. With the value Dog.
// using .notation to add the specicies key with the value dog
animal.species = 'Dog';
// using bracket notation create a new key called name and give it a value string
animal['name'] = 'Spot';
animal.noises = [];
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create an object literial named noises, make it an array
var noises = [];
// bracket notation adding string of noise to array noises
noises[0] = 'Bark';
// using .push method we add another noise
noises.push('tweet');
// using unshift() method to add another sound to the beginning of an array
noises.unshift('meow');

// use .length to access one past the last index no matter how long the array
noises[noises.length] = 'woof';

// console logging different elements of our awway
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);







//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// add the noises property from the animal object to our array noises

animal['noises'] = noises

// using any method we are adding another noise property
animal.noises[animal.noises.length] = 'bow-wow';

console.log(animal);



/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *   // for objects you can use .notation if you know the name of the key
     // you can also use bracket notaion just be sure to use ''
     // to cycle though the keys you can for-in loop
 * 2. What are the different ways of accessing elements on arrays?
 *   // you can call an index in bracket notation. 
     // you can also pull() from the end or shift() first element
     // you can splice() out (cut out) another array at a specific
     // index. 
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
// new array
var animals = [];

// push our animal object into our new array
animals.push(animal);

console.log(animals);

// var duck and assign given code
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };

// push duck to animals
animals.push(duck);

console.log(animals);
// make two new animal objects
var cat = {
    species: 'cat',
    name: 'Bosco',
    noises: ['meow', 'Im hungry'],
}
var tiger = {
    species: 'tiger',
    name: 'Mike',
    noises: ['Roar!', 'puuuuur'],
}
// add both new objects to object animals.

animals.push(cat, tiger);





//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// I chose an array to hold the friends list
// because It seems I will only need to hold names
var friends = [];


// take a random friend from the animal array with a function 
function getRandom(p1){
    // array is parameter, return a random index
    // Math.random * the max index of array will pick random #
    // the Math.round() will take that interger and make it a whole #. 
    return p1[Math.round(Math.random() * p1.length - 1)];
}

// get the name from animals into friends randomly 


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
