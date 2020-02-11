                 /*/ Functions */

    //  When we want to design a task that can be called upon (invoked) by our code
    //   we make functions. Functions are blocks of code that sit dormant until we
    //   need to use it. Here is an example of proper function syntex.
   /*
         :declare function: :functionName: (:parameters:){
             :code block:
         };
   */
   
     // by typing function then typing a function name we are declairing 
     // a function.
     // The p1 in the code below is the parameter, it is like getting a new
     //   variable that we can pass a value into when we invoke 'or call' the 
     //   function. Then the code block is ran
     
     function firstFunction (p1) {
         // Function code block
     }
     
     // When we call a function we can do it without giving a parameter, that is fine
     // it will simply run the function
     
     function noParameterFunction (){
         console.log('Hello!')
     }
     
     noParameterFunction(); // <---- prints to the console 'Hello'
     
     // are different way to use a funtion is to give it a parameter that can be used within the code 
     // block.
     
     function secondFunction (p1){
         console.log(p1)
         };
         
     secondFunction ('Hello!'); // <--- prints 'Hello!' to the console
     
     // if we send a arithmetic expression the the function it will solve
     // the math problem and send the outcome as the parameter.
     
     function functionName (p1){
         console.log(p1)
         };

     functionName(1+1); // <----  prints 2 to the console

     // Another cool thing about functions is that we can have a nested function
     // One way to use a nested function is to assign a function to a variable
     
     function thirdFunction() {
         console.log('Parent scope');
         return function () {
             console.log('nested code');
         };
     }
     // createing a new function and running thirdFunction will assign a
     //    as the returned function.
     var a = thirdFunction();
     a() // <--- prints to the console 'nested code'
     
     // It is important to talk about scope when discussing nested functions
     
     var globalVar1 = 'Hello';
     
     // In this example we have our main function
     function fourthFunction() {
         // This function can access variables in the global scope
         console.log(globalVar1); // <--- preints 'Hello'
         // Lets make a new variable inside our main function
         // This is called creating something in our Function scope
         var functionVar1 = 'woohoo!';
         
         // now lets return a 'nested function'
            return function () {
                // The scope in here is considered a 'nested function scope'
                // In this scope we can access both the global scope
                //    and the above function scope
                console.log( globalVar1 );
                console.log( functionVar1 );
                // If we create a variable inside of this nested function
                var nestedFunctionVar1 = 'Im stuck in here!'
                // that variable will be limited to this code block
                //   and cannot be used in the above function scope
                //   or the global scope
         
         
                // What are closures?
                // The term closure can simply refer to a function that hs access
                // to a private variable.
                
                // lets look at an example that is similar to the one above, 
                // while also making note of our scopes.
                
                // We talked eairler a function nested inside a function has
                // access to both the global scope and the function scope. The
                // variables the nested function have access to that are inside
                // the function scope is considered 'closure'.
                
                // This is because the function variables are closed
                // in the main function and wwill TRAVEL with the
                // nested function wherever its journy will take it.
                
                
                
                
     
     


7. Closures: Functions form closures around the data they house. If an object returned from the Function and is held in memory somewhere (referenced), 
that closure stays ALIVE, and data can continue to exist in these closures! (See: our meeting-room app for an example!) (ALSO, see: Understanding JavaScript
Closures with Ease)
*/



























