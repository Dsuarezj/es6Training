
// this test block scoping and let (this is meant to replace var)

let product = 12;
var oldProduct = 20;

{
  let product = 1200; //You can access this variable only inside this block
  var oldProduct = 2000; // You can access this variable outside this block
  console.log('Inside block', product); // Will print 1200
  console.log('Inside block', oldProduct); // Will print 2000
}

console.log('Outside block', product); // Will print 12
console.log('Outside block', oldProduct); // Will print 2000 -> Reasons why var is dangerous


// Declaring a function using let

const updateProductId = () => productId = 12;

let productId = null;
console.log('before assign', productId); // this will print null
updateProductId();
console.log('afterassign',productId); // this will print 12


// What happen inside for loop
let productArrayWithVar = [];
for (var i = 0; i < 2; i++){
  productArrayWithVar.push(() => i);
}

console.log(productArrayWithVar[0](), productArrayWithVar[1]());
// this will print [2, 2] because a closure get formed for the variable i and at the end it will be 2

let productArrayWithLet = [];
for (let i = 0; i < 2; i++){
  productArrayWithLet.push(() => i);
}

console.log(productArrayWithLet[0](), productArrayWithLet[1]());
// this will print [0, 1]
// with let every loop get it own variable i and any closure will have the excepted value
