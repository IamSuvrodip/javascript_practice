// for loop
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

for (let index = 0; index <= 10; index++) {
  const element = index;
  console.log(element);
}
console.log("\n");
/*
0
1
2
3
4
5
6
7
8
9
10
*/
/*
for (let index = 0; index <= 10; index++) {
  const element = index;
}

console.log(element);*/
//element is not defined

for (let index = 0; index <= 10; index++) {
  const element = index;
  if (element === 5) {
    console.log("5 is best number");
  }
  console.log(element);
}
console.log("\n");
