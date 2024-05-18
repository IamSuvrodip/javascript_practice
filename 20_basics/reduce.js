// reduce helps in Shopping cart billing parts
const myNums = [1, 2, 3, 4, 5];

const myTotal = myNums.reduce((accumulator, currentValue) => {
  console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`);
  return accumulator + currentValue;
}, 0);
console.log(myTotal);
console.log("\n");
/*
accumulator: 0 and currentValue: 1
accumulator: 1 and currentValue: 2
accumulator: 3 and currentValue: 3
accumulator: 6 and currentValue: 4
accumulator: 10 and currentValue: 5
15
*/
const shoppingCart = [
  {
    item_name: "Smartphone",
    price: 599.99,
  },
  {
    item_name: "Laptop",
    price: 999.99,
  },
  {
    item_name: "Headphones",
    price: 99.99,
  },
  {
    item_name: "Smart Watch",
    price: 199.99,
  },
  {
    item_name: "Tablet",
    price: 399.99,
  },
  {
    item_name: "Bluetooth Speaker",
    price: 79.99,
  },
  {
    item_name: "Gaming Console",
    price: 499.99,
  },
  {
    item_name: "Camera",
    price: 299.99,
  },
  {
    item_name: "Fitness Tracker",
    price: 129.99,
  },
  {
    item_name: "E-book Reader",
    price: 149.99,
  },
];
