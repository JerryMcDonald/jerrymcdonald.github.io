                /*/ Loops
/*
        In coding languages like Javascript Control-flow is the order in which the code is ran.
     From top to bottom, unless influenced but conditional statements or loops. When we want to 
     run a block of code multiple times, sometimes with different values inside, we can use 
     loops. And there are different types of loops that can be useful in different situations. 

*/

     /*/        for loops
                *********
         // Lets say for example you would like to console.log every number 
         // between 1 and 5. The uneffecent way to do this (also known as 
         // hard coding) is to type your code like this.

         console.log(1);
         console.log(2);
         console.log(3);
         console.log(4);
         console.log(5);

         // A much more efficient way to produce this outcome is a loop.
         // Lets first look at for loops

         // If you would like to use a for loop. You need to first declare a 
         // staring variable. Then type the condition ( be sure to use simicolon
         // and not comma!), then you need to state the modifier. 
         // Here is an example of a for loop */
         
         // we need to declare variable i and set it to a value
         // then the condition making the loop stop if i is below 6
         // then the increment, adding one to i after each loop
         for (let i = 0; i < 6; i++) {
             // code inside the for loop will run once with i = 0
             console.log(i);
             // then because our increment was i++ the loop will 
             // add 1 to i and check the condition again
         }

         //  What if you would like to iterate forwards and backwards
         //    over an array? Let us go over that with a for loop. 
             // here is an array with three keys
             var arrEx = ['one','two','three'];
             // Lets start our for loop and begin our index at 0.
                 // (because the first index in an array is 0)
             // Our condition will be index < arrEx.length
                 // (because .length will give us how many indexs there 
                 //    are, and we want to stop one below that. )
             for (let index = 0; index < arrEx.length; index++){
                 // each loop we will we can acces the elements in
                 // order by using our index variable
                 console.log(arrEx[index].toUpperCase()); }  
             // The above for loop logs:
             // ONE
             // TWO
             // THREE

        // But what if you would like to loop over an array backwards?
              // Using the same array but this time we will start our
              //  index value at the arrEx.length-1 (so we begin at the end)
              // Our condition will make us stop at the beginning index.. 0)
             for (let index = arrEx.length-1; index >= 0; index--){
                 console.log(arrEx[index].toUpperCase()); }
             // The above for loop logs:
             // THREE
             // TWO
             // ONE
             
             
         //              while loops
         //              ***********
         // Another loop you can use is a while loop. They work in much
         // a similar way to for loops but there is only a condition and
         // an increment
         // Here is the proper syntex for a while loop. 
         
       //  while (:condition:){
           // code that will run while condition is true
           
       //}
       
       // It is important to note that if you do not change the condition, Your 
       // loop will run forever!  
       
       while (10 > 5){
           console.log('never ends'); // ---->  This loop will run indefinitely!
       }
       
       // Here is an example of a proper while loop   */
       
       // If you are going to use a variable in your while loop condition
       // make sure to initialize it and assign it your starting point!
       
       var i = 0;
       // we can then use our new variable in our condition
       while ( i <= 5){
       // the code block will begin at i = 0
       console.log (i);
       // we will then add one to i
       i++;
       }
       // at the end of the code block the while loop will run again
       //
       // The above example will log:
       // 0
       // 1
       // 2
       // 3
       // 4
       // 5
       // and i will now equal to 6 so..
       console.log(i); // logs 6 to the console.
     
     
     
     /*/ for-in loops */
     //  ************
     // If for example you would like to loop over each key in an object
     // you can use a for-in loop. This is a great tool for viewing or 
     // changing values in an object. 
     
     var object = {
         name: 'Elsa',
         species: 'Dog',
         age: 2,
     };
     // we first state a for-in loop with for()
     // and name the object that we would like to cycle
     // the keys of.
     for (var key in object) {
         // the key value will take the place of the first key in the object
         // in this case 'name'
         console.log(key); 
         // the it will loop again as the next key.
     }
     // The above key in loop will log:
     // "name"
     // "species"
     // "age"
     
     // But what if you would like to loop over an object and get access to the
     //   values of the keys?
     // Let's use the above object 
     //  and start our for in loop normally
     for(key in object){
         // Key takes the place of the key name
         //   so to access the value we can use 
         //   bracket notation with the key
         console.log(object[key]); 
     }
      // The above example will log the value of each key
      // The console will log:
      // "Else"
      // "Dog"
      // 2





