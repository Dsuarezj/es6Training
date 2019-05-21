'use strict';


const price = 1.12;
const getPrice = amount => amount * price; //This syntax is recommended when you have one param and a single expresion, the return it is implicit
console.log('Type:', typeof getPrice, 'Result:', getPrice(2)); // This will print "Type: function Result: 2.24"

const getPriceWithTaxes = (amount, taxes) => {  //This syntax is recommended when you have more than one param and a block of code
  const totalWithoutTaxes = amount * price;
  return totalWithoutTaxes * (1 + taxes/100); // In this syntax the return should be explicit
};

console.log('Result with taxes:', getPriceWithTaxes(2, 12).toFixed(2));
// This will print: "Result with taxes: 2.51"


// Handle the this

this.generalTaxes = 2; //We add generalTaxes variable to the context of this script
this.generalCalculator = () => 'I am in aplication context'; //We add generalCalculator variable to the context of this script

// with function

const invoiceWithFunction = {
  id: 123,
  process: function () {
    console.log('this on function syntax:',this)
    // "this" is set to the object in which the function is called, in this case invoiceWithFunction
    // it will print { id: 123, process: [Function: process] }
  }
};


invoiceWithFunction.process();
console.log(invoiceWithFunction.process.prototype);

const invoiceWithArrowFunction = {
  id: 456,
  process: () => {
    console.log('this on arrow function:',this)
    // "this" get the context of the code we are running, we are not going to get the invoiceWithArrowFunction object
    // it will print { generalTaxes: 2, generalCalculator: [Function]  }
  }
};

invoiceWithArrowFunction.process();
console.log(invoiceWithArrowFunction.process.prototype); // Arrow functions does not have prototype property
console.log(invoiceWithArrowFunction.process.__proto__); // Arrow functions have __proto__ property
