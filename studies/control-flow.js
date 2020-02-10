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
            // code block that will fun if the condition is true
            console.log('Your number is less than 1500'); 
        }
        // Javascript will pass over and not run it if statement if the condition
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
        




     /*4/ SWITCH  */
        // Switch Statments are handy when you have many specific conditions you would like to 
        // check for. For example my daughter recently bought a mood ring, now if I wanted to 
        // develop a program that printed out her supposed mood based on the color of the ring,
        // the else, if-else chain would get fairly large. So lets make a switch statement to 
        // streamline this. 
        
        var colorOfRing = 'Blue'
        
        // switch is pulling colorOfRing as it's parameter
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
        // until I make her start her homework


