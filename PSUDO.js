/************************PSEUDO*****************************
 * DEVELOP  
 * RETURN  
 - 
**************************CODE*****************************/


// Be able to loop any number of times, forward counting up to some limit, backward counting down to 0


// Loop over an Array, forwards and backwards


// Loop over an Object


printAlteredString('hello', toUpperCase);

const toUpperCase = function(str) { 
    return str.toUpperCase(); 
};

const printAlteredString = function(string, alterString) { 
    console.log(alterString(string));
};
