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
