                /*0/ Operators
/*     Probably the most important building block for software development
     will be operators. If you are just console logging all day or messing
     around with allready establised functions, methods, or properties you 
     are not creating anything new. We need operators to create and compare
     code. There are different types and they have different uses. Lets begin 
     talking about assignment operators. 
     
*/


                /*1/ Assignment operators */

        // The = Operator
        // One operator stands above all others, it allows us to begin 
        //  assigning values to our own variables. 
             // This assignment operator (=) is taking the string on the right
             // of it and placeing it into the variable on the left.
             var apple = 'red';
             console.log(apple); // prints red
        
        // The += will save you some typing because it will add the value on
        // the right to the given variable.
             var money = 10;
             money = money + 15; // money = 25
             money += 15; // This statement using the += operator achomplishes
             // the same feat as the one before it but with less code. 
        
        // The +- operator will subtract the value on the right from the value on
        // the left. 
             money -= 10; // the same as (money = money - 10)
             console.log(money); // prints 30 to the console
             
        // Along the same lines you have the *= and /= operators
        // *= will take the value on the right and multiply the value on the left
             money *= 100; // the same as (money = money * 100)
             console.log(money); // prints 3000 to the console.
        // and the /= operator will do the same but with division
             money /= 300;
             console.log(money); // prints 10 to the screen
             
        // The %/ assignment operator will return the remainder of the 
        // two given variables. 
            money %= 5; // the same as money = money % 5
            console.log(money); // prints 0 to the console.
        
        
                /*2/ Arithmetic operators */

     
        //  So we looked at some Assignment Opperators but lets say you need to 
        //  simply add, subtract, multiply, or divide two or more numbers? Well 
        //  Arithmetic operators are here to help. 
        

        // The + operator will add two numbers (or operands) together, but if one of the values
        // being added is a string it will concatinate.
        // Adding two numbers with the + operator
             let x = 2 + 2; // x will equal 4
        // You may also increment a number by one by using the shortened variable++;
             x++; // x will now equal 5 becaue we added 1.
        // Concatination example, because at least one of the operands is a string
        //   the values will be joined (aka concatinated) into a string. Notice that we included 
        //   adding a space to the string to seperate the words. 
             let y = 'I love to' + ' ' + 'code.' // y is equal to 'I love to code.'

                                   
        // The - arithmetic operator will subtract two numbers from one another. The operator
        // will subtract the right operand from the left operand. 
             let xSubtract = 5 - 1; // variable xSubtract will equal to 4
        // We may also reduce a number by one by using the shortened:
             xSubtract--; // xSubtract will now equal 3
             
        // The multiplication and Division operators allow us to continue getting
        //   our math on. (*) (/)
             let math = 2 * 2; 
             console.log(math); // prints to the console 4
             math = math / 2;
             console.log(math) // prints to the console 2
             
        // Like we talked about in Assignment operators. The % operator will divide 
        // the left value by the right, but it will only return the remainder. This
        // is very useful when trying to find multiples of a given number. 
             math = 10 % 3;
             console.log(math); // prints 1 to the console because that is the remainder
                                // of 10 divided by 3. 
             
                /*3/ Comparison operators */
    
        // So now that we have assigned a few variables and mathed a few numbers
        //   we need to see if those numbers match what we need! Conditional statements
        //   are critical to the growth and flexibility of our code. And Comparison
        //   operators are the center peice of most conditional statements because
        //   they will return to us true or false.
        
        // There are two ways to see if variables are equal to one another.
        // The the equal to (==) will compare the two values as if they
        //   were the same type.
        // And the strictly equal to (===) operator will return true if the variables 
        //   are the same type and they match. 
            var oneThru5 = 12345;
            var stringOneThru5 = '12345';
            
            
        // !== strict inequality
        
        // > greater than
        
        // < less than
        
        // >= <=
        
                /*4/ Logical operators */
                
        // || or
        
        // && and
        
        // ! not




            //    /*5/ Unary operators (!, typeOf, -)
                
        // delete
        
        // typeof
        
        // void


         //       /*6/ Ternary operator (a ? b : c)

        // takes three conditions 
