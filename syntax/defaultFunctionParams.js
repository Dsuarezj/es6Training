'use strict';

const getProduct = (productId = 100, name = 'hardware') => console.log('***', name, ':', productId);
getProduct(2000); // Since the name is undefine it will pick the default value `*** hardware : 2000`

const generateBaseTax = () => 0.07;
const getTotal = (price, tax = price * generateBaseTax()) => { // You can refer another variable o function outside the function, you can also refer to a variable that are in the context. But make sure it is declared first
  console.log(price + tax);
};
getTotal(2);
