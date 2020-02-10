// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

/************************PSEUDO*****************************
 * DEVELOP A function makeContact() that will recieve three
           parameters. An id, nameFirst, and nameLast;
 * RETURN  The given parameters as an Array. 
 - create object variable to hold the given parameters. 
**************************CODE*****************************/

function makeContact(id, nameFirst, nameLast) {
   var object = {
       id: id,
       nameFirst: nameFirst,
       nameLast:  nameLast,
   };
   return object;
} 



/************************PSEUDO*****************************
 * DEVELOP A function makeConatactList() with no parameters 
           and within it develop an object that contains 
           contact management functions. 
 * RETURN  An object that contains contact management functions.
**************************CODE*****************************/

function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    // A new variable called contacts that can hold an array. 
    var contacts = [];
    
    // RETURN AN OBJECT THAT MANAGES FUNCTION
    // LENGTH
    // ADD A NEW CONTACT
    // FIND CONTACT
    // REMOVE CONTACT
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length; },
            
            // This nested function will simply take a object and 
            // push it into contacts from the outer function. 
        addContact: function(object) {
            contacts.push(object);
            //console.log(contacts);
        } ,
            // We need to develop a function that takes a full name string
            // and return the whole object that matched the value.
        findContact: function(a) {
            
            for (var i=0; i < contacts.length; i++) {
                // a new variable name that holds the values of first and last
                // name. Then be sure to combine them with a space.
             let name = contacts[i].nameFirst + ' ' + contacts[i].nameLast;
                // compare the new var with the given parameter
              if (name === a){
                  return contacts[i];
              } 
              }
              // dont forget to include undefined if no contact is found.
              return undefined;
        },
        
        // the given parameter will be an object
        removeContact: function(a){
            
            for (let index = 0; index < contacts.length; index++) {
                if (contacts[index] === a){
                    // the .spice method is an easy way to remove a specific
                    // index in an array. 
                 contacts.splice(index, 1); // .splice(the index, how many indexs to remove)
            }
            
        }
        },
        // new function, no parameters
        printAllContactNames: function(){
            // new array to hold each contacts full name
            let arr = [];

            for ( let index = 0; index < contacts.length; index++){
                // using push we add the first name of the key index concatted with a
                // space and the second name. 
                arr.push(contacts[index].nameFirst + ' ' + contacts[index].nameLast);
            }
            //console.log(arr);
            console.log(arr.join(''));
            // join them together with a new line break between full names. 
            // return
            return arr.join("\n");
            
        }
    };
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
