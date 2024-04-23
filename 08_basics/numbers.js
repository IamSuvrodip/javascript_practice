const score = 100;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(typeof balance.toString());
console.log(balance.toString().length);
console.log(balance.length);
console.log(balance.toFixed(2));
console.log(balance.toFixed(3));

const otherNumber = 23.8966;
console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toExponential(3));

/*
100
[Number: 100]
string
3
undefined
100.00
100.000
23.9
2.390e+1
*/


