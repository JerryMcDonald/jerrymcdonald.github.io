                /*0/ String Manipulation
*/ 
     /*/ Often times when we are solveing code problems we are required to
         manipulate strings. Sometimes we just need to add one string to 
         another. This can be simply done with the + Arithmetic operator.
*/
        let firstName = 'Jerry';
        let nameLast = ' McDonald';
        let fullName = firstName + nameLast;
        console.log(fullName); // prints 'Jerry McDonald' to the console

        // When we use the + on strings, we say it is used to 'concatinate' (combine)
        //   the strings
        
        // We can also use the += operator as a quicker way to concatinate strings
        
        fullName += ', I am a student at Operation Spark.';
        console.log(fullName); // Logs to the console:
                               // 'Jerry Mcdonald, I am a student at Operation Spark.'

        // Before we begin It is important to note that these methods and properties
        // are not changing the string itself. They are returning a new string. 
        
        var exampleString = 'Jerry McDonald';
        
        // .split()
        // say a string is just not cutting it. Why not split it up into an 
        //  array? You can even designate where the string splits at!
        
        var exampleArray = [];
        exampleArray = exampleString.split(' '); // in the parenthesis put where
                                                 //   you would like it split. 
        console.log(exampleArray); // prints ['Jerry', 'McDonald'].
        
        
        // .toUpperCase() and .toLowerCase
        // well, lets say you where you are given a single character... and you do
        //  not know if it will be upper or lower case! You still need to find 
        //  if matches the first letter of the string. So in this case we can
        //  use these methods.
        
        function doesFirstLetterMatch (a) {
            // we do not know if a is upper or lower case so lets create 2 
            //   variables to check for both. 
            let upperCase = exampleString.toUpperCase();
            let lowerCase = exampleString.toLowerCase();
            
            // Then the first index of each matching a as the condition
            if (upperCase[0] === a || lowerCase[0] === a){
               console.log ('The first letter matches!');
        } else 
        console.log ('It does not match :(');
        }
        
        doesFirstLetterMatch('j'); // will print 'The first letter matches!'


        // .concat() method
        // Remeber how we added two strings together using the plus operator 
        // eairler? Well you can also use this method.
        
        var a = 'Dogs';
        var b = 'Cats';
        var c = a.concat(' ', 'and ', b); // you can add another , to concat even more
        console.log(c); // Prints 'Dogs and Cats' to the console.
        
        
        //.slice()
        // Want to target a specific set of indexs in the string, then return
        // everything in that range? Well do we have a method for you!
        
        exampleString = 'Bernie Sanders';
        // for the conditions of splice, put the beginning index, then the index
        // thats just after the end of the string you want. 
        let sliceFirstName = exampleString.slice(0 , 6);
        // .splice() removes the string from index 0 to 5, and returns it to
        //  spliceFirstName. 
        console.log(sliceFirstName); // Prints Bernie
        
        // .indexOf() and lastIndexOf()
        //   These two methods are useful because they can return to you the index
        //   that a given string first occured or last occured. 
        //   These methods take two parameters
        //   The indexOf() method begins looking from left to right in the string
        //   for the given parameter. 
             exampleString = 'Did you watch the XFL this weekend? It was fun to watch.';
             console.log(exampleString.indexOf('watch')); // prints 8 to the console.
        
        //   Coming from the other end lastIndexOf will look from right to left and 
        //     return the last occurance of the given string. 
             console.log(exampleString.lastIndexOf('watch')); // prints 50 to the screen
        
        //   To get even more versatile we can give a second parameter on .indexOf for
        //   a left starting point. 
        //     // below will print 50 to the console because we skipped the first watch
               // and began looking at index 20 
             console.log(exampleString.indexOf('watch', 20)); 
        
        //   We may also supply a second parameter for lastIndexOf(). This will be the 
        //   index we begin looking at from right to left. 
             console.log(exampleString.lastIndexOf('watch', 30)); 
             // this will print 8 because we began at index 30 and looked left to see the 
             // last occurance of 'watch'.
        
        