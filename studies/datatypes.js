                /*0/ DataTypes
*/
     // In Javascript a Datatype is simply an attribute (type) given to a peice of data, when you
     // label data as a type this will let the programing language know how you intend to use the 
     // data. Based on the given data type, javascript will know based on its built in code how to 
     // interact with that datatypes value. 

     // An important not is that in javascript datatypes are dynamic, meaning the same variable
     // can hold one data type (ex. numbers) and then later be changed to another type (ex. Arrays)

                /*1/ NUMBER */
     // A number data type is simply a numerical value.
     // You can change the value of a given number using arithmetic
     // or use the numerical value in a conditional statement
     
     let numberVar = 5;
     numberVar++;
     console.log(numberVar); // Prints 6 to the console.


                /*2/ STRING */
      // A string is simply a collection of strings, each character in the string 
      //    is organized by zero based indexing.
      // A string data type needs to be declared using single or double quotes
      // Although strings do not have their own .properties or methods(), (becasue
      //    they are considered primitive values), we can still manipulate them
      //    with object methods and properties. 

            let stringOne = 'Hello';
            let stringTwo = " World"; // you can see we used single and double quotes
            console.log(stringOne + stringTwo); // prints 'Hello World'
            
            
                /*3/ BOOLEAN */
      // Boolean datatypes are simply true are false. 
      // You can just assign true or false to a variable
      let boolean = true;
      // But you can also assign a condition, if the condition is met
      //    then it return true, false if not. 
      let booleanTwo = (5 < 2);
      console.log(booleanTwo); // prints false to the console.


                /*4/ ARRAY */
     // an Array is a variable that can hold multiple values at a time. 
     // you declare an arry by assigning square brackets to a variable
     // inside of those brackets you type your values while seperating 
     // them with a comma. 
     let array = ['index 0', 'index 1', 'index 2'];
     // an array is index based and the count begins at zero, so
     console.log(array[0]); // prints 'index 0' to console.
     // arrays are also considered objects so they can be manipulated
     // with properties and methods().
     console.log(array.length); // prints 3 to the console.
     
     


                 /*5/ OBJECT */
     // An object datatype that is written as a key: value pair
     // This is useful when you want a variable that can not only hold
     // multipe values, but organize those values with keys. 
     let videogame = {
         // The key will also be a string data type
         name: 'Age of Empires',
         // the value can be any data type so we need to add
         // quotes to make a string
         releaseYear: 1997,
         stillOwned: true,
     };


                /*6/ FUNCTION */
    //  When we want to design a task that can be called upon (invoked) by our code
    //   we make functions. Functions are blocks of code that sit dormant until we
    //   need to use it. Here is an example of a function
    let quaterBack = undefined
             // to invoke the function type willTheSaintsWin()
             // then include the value you would like to make the parameter
    function willTheSaintsWin(p1) {
        if (p1 === "Drew Brees" || p1 === 'Teddy Bridgewater' || p1 === 'Taysom Hill') {
            console.log('We are gonna be ok');
        } else {
            console.log('Not lookin Good');
        }
    }
    
    willTheSaintsWin(quaterBack); // This will print to the console 'Not lookin good'

                /*7/ UNDEFINED */
    // When you create a variable with assigning it a value, javascript will give
    // it the primitive value type of undefined. 

     var myName;
     //At the declaration phase, the variable example is undefined because we have NOT initialized
     //it to anything
     console.log(myName); // prints => undefined


                /*8/ NULL */
     // a little like undefined, null means there is no value for the 
     //   variable.
     // But unlike undefined, null expresses a lack of identification
     // Javascript will consider null as an object
     // one way you can unilize null in your code:
     let arrayExample = [1,2,3,4];
        // null can be used to clear an object
        arrayExample = null;


                /*9/ NaN */
     // NaN is considered in javascript to be not a number
     // It is most often returned when cdmath functions do
     //   not make any sense. 
     // It can also be returned when you try to add to an 
     //    undefined value. 
     let v = undefined;
     console.log(v + 1); // this will return NaN
     

                /*10/ Infinity and -Infinity */
     // The value of Infinity is greater than any number. 
     // When you use the infinity value type, any number that you add
     //   or multiply to infinity will return infinity, and any positive
     //   number divided by infinity will return zero.
     let inFin = Infinity;
     console.log(inFin * 20);  // returns Infinity
     console.log(inFin + 1);    // returns Infinity
     console.log( 40 / inFin);  // returns zero
     // On the other end of the spectrum we have -Infinity, this is like
     //   saying a value is infinitely in the negative.
     // Any infinity value multiplied by a negative value will 
     // equal -Infinity.
     console.log(inFin * -1); // returns -Infinity
     
        
     // Primitive and Reference values
     // Primitive values are copied 
        var prim = 1;
        var copy = prim;
        prim = 2;
        console.log(prim); // prim is equal to 2
        console.log(copy); // but copy is still equaly to 1. Because the original value of prim was copied. 
        
     // reference values are not copied. They reference a value inside of a complex data type. That can change
     // dynamically
        