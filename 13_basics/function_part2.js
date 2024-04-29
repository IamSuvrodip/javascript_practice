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

function calculatePrice(value1, value2, ...num) {
  return num;
}

// value1 -----> 200
// value2 -----> 400

console.log(calculatePrice(200, 400, 500));
console.log("\n");
// [ 500 ]

const user = {
  username: "Suvrodip",
  age: 23,
};
