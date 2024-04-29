// Functions with object

// suppose you develope a shoping cart page
// you don't know how many item add in cart and calculate all of these prices
// rest and spread operator
function calculateCartPrice(...num) {
  return num;
}

console.log(calculateCartPrice(200, 400, 500));
console.log("\n");
// [ 200, 400, 500 ]
