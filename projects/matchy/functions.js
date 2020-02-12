/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


// function search, two parameters
function search (animals, name){
    // cycle through the animal array
    for (var i = 0; i < animals.length; i++){
        // check if the name key in each object
        // will match the name parameter
        if (animals[i].name == name){
            // return the full object
            return animals[i];
        }
    }
        // if no matches were found
        return null;
    
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// function replace, three parameters
function replace (animals, name, replacement){
     // cycle through the animals array
     for (var i = 0; i < animals.length; i++){
         // check each name key against name
        if (animals[i].name === name){
            // if match replace object with replacement parameter
            animals[i] = replacement;
}
}
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// function remove, two parameters
function remove (animals, name){
    // cycle through animal array
    for (var i = 0; i < animals.length; i++){
        // check name key for each index against given name param.
        if (animals[i].name === name){
            // if so splice out one element at the given index
            animals.splice(i, 1);
}
}
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// function add, two parameters
function add(animals, animal){
     // begin by checking if name value has any indexs
    if (animal.name.length > 0){
       // then check if the value for species has length
      if (animal.species.length >0){
          // if both are true cycle through animals array
         for (let i = 0; i < animals.length; i++) {
             // check the value of name in each animal
             // compare against given animal.name
            if(animals[i].name === animal.name){
                // if all conditions are true lets end function, no return
                return;
            }
            // if there is a name element and a species element
            // then it all checks out. Add that animal!
            return animals.push(animal);
         }
         return; // there is no species elemet!
    }
    return; // there is no name element!
    }
    return; // they must just be clicking a button with empty boxes!
    //
    
}

  
    
/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
