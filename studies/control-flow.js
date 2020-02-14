                /*/ CONTROL-FLOW 
*/
     /*0/ Introduction
        In computer programming we are mearly giving the computer instructions, and 
        these instruction are also known as statements. An the order in which these
        statements are executed is know as the control-flow. In coding languages like
        Javascript control-flow begins at the first line of code at the top and ends
        at the last and bottom line of code. Unless influenced by conditional statements 
        or loops. In this section we will be going over some conditional statements:
        if, if-else, else, and switch. We will also review their proper syntex and use, 
        and how they can effect the control-flow of our code. 


     /*1/ IF */
        // Eairler we talked about statments and control flow. Statements being
        // instruction that will be executed by the computer. One of the statements
        // that can effect the order in which our code is ran is an if statment. Inside
        // the if statement we will type what is known as the code block, and this block
        // of code will only be ran if the condition stated is met. Conditions in if 
        // statements must be boolean data types. 
        
        var num = 1234;
           // condition 
        if (num < 1500) {
            // code block that will run if the condition is true
            console.log('Your number is less than 1500'); 
        }
        // Javascript will pass over and not run the if statement if the condition
        //  is false.



     /*2/ ELSE-IF */
        // If we would like to continue on the if chain and test for another condition
        // then we can use the else-if statment. It must be started after the code block
        // for the main if statement has ended. After the last curley brace {} you may
        // initialize the next statement by typeing else if (conditions).
        
        num = 600;
           // first else condition
        if (num > 1500) {
            // code block that will fun if the condition is true
            console.log('Your number is Greater than 1500'); 
            // here is where we begin the else-if chain. 
            } else if ( num > 1000 ) {
            // the code block for the else-if statement
            console.log('Your number is Greater than 1000');
            // We are able to continue adding as many else-if
            //   statements as we need. 
            } else if ( num > 500){
                console.log('Your number is Greater than 500');
            }
            
        // It is important to note that you can have as many else if statements
        //   in a else/ else-if chain as you would like. But only one else statement
        //   which we will talk about below. 
        

     /*3/ ELSE */
        // Say you have only one condition that still needs to be met. And it relies on
        // all other conditions in your if, if-else chain to be false. You may then use
        // the else statment. This can handy for your last required condition because you
        // do not need to include a conditional statement. 

        var hoursWorked = 0;
        if (hoursWorked > 40) {
            console.log('Overtime!');
        } else if (hoursWorked > 30) {
            console.log('A decent check');
        } else if (hoursWorked >= 1) {
            console.log('Ok, well at least its something.');
        // Here is where we can add an else statment to account for
        //   no other conditions returning true.
        } else {
            console.log ('Well so much for that job!');
        }
        
        // It is important to note that you can only have one else statement
        //   at the end of your else/ if else chain.
        //   for example:
        //
        // let a = 12;
        // if (a < 10){
        //          console.log('Less then 10');
        //        } else if (a < 8){
        //          console.log('Less then 8');
        //        } else {
        //          console.log('Greater or equal to 10');
        //        } else {
        //          console.log('This code would never run');
        //        }
        // If you try to run the code above you will SyntazError, meaning
        //   you are typeing something that just does not work in javascript,
        //   in this example it is the extra else statement at the end.
        

     /*4/ SWITCH  */
        // Switch Statments are handy when you have many specific conditions you would like to 
        //  check for. Before we talk about when you would use a switch statement, lets go over
        //  the proper syntax (placement of statements and expressions) of a switch statement.
        //
        //   // Start your switch statement by typing switch (lowercase s)
        //         switch 
        //   // Then type the variable your testing, switch statments have one
        //   //    (this is what makes them unique, switch statements compare 
        //   //     one expression on a case by case basis.) 
        //         switch (expression) {  // dont forget to begin your code block
        //   // You then want to begin with your fist case condition, the
        //   //  switch statement will compare your given expression to what
        //   //  you have written after case. 
        //         switch (expression) {
                    // use : and not =
        //          case 1:
        //   // What comes next is the code you would like to execute if the 
        //   //   expression matches the given case.
        //         switch (expression) {
        //          case 1: 
        //             console.log('The answer is 1'); 
        //   // You now have multiple options at this point if you would like
        //   // to end your code after the one condition is met, you can include
        //   // a break command to exit the switch statement 
        //         switch (expression) {
        //          case 1:
        //             console.log('The answer is 1');
        //             break; }
        //   // If you would like to check for other conditions, include those
        //   //  cases with their own break statements. 
        //          switch (expression) {
        //          case 1:
        //             console.log('The answer is 1');
        //             break;
        //          case 2:
        //             console.log('The answer is 2');
        //             break;
        //          case 3:
        //          case 4:
        //             console.log('The answer is 3 or 4');
        //             break;
        //             }
        //   // In the example above we wrote code that will run if case 3
        //   //   OR case 4 match the given expression. 
        
        // When would a case statement be useful? 
        // Let us say that my daughter recently bought a mood ring, now if I wanted to 
        // develop a program that printed out her supposed mood based on the color of the ring,
        // the else, if-else chain would get fairly large. So lets make a switch statement to 
        // streamline this. 
        
        var colorOfRing = 'Blue';
        
        // switch is pulling colorOfRing as it's expression
        switch (colorOfRing) {
            // curley brackets to identify the code block
            // we type case then the condition
            case 'Black':
                // Here is the code that will run if colorOfRing is 'Black'
                console.log('You are Stressed and Overworked!');
                // Then the command break; will kick us out of the switch statment. 
                break;
                // if we want to run code for multiple cases we can exclude the
                // break command after the case:
            case 'Gray':
                // If Gray condition is met it will print 
                // 'You are Nervous or Anxious'
            case 'Light Gray':
                console.log('You are Nervous or Anxious');
                break;
            case 'Green':
            case 'Blue Green':
                console.log('You are not under stress and are somewhat relaxed');
                break;
            case 'Blue':
            case 'Violet':
                console.log('You are very relaxed and Happy!');
            break;
            // our code will break out when case blue is reached, but
            // if it did not we can use the default statement (much like else)
            // to account for everything else.
            default:
                console.log('I think the ring is broken');
        }
        
        // So when my daughter inputs the color of her ring this switch statement
        // will print to the console 'You are very relaxed and Happy!'
        // until I make her start her homework.


