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


console.log("\n");

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN"));
console.log(hundreds.toLocaleString("en-US"));
console.log(hundreds.toLocaleString());// by defult indian types
/*
10,00,000
1,000,000
10,00,000
*/


//************** Maths ****************/
console.log("\n\n\n");
console.log(Math); //browser console

console.log(Math.abs(-4)); // 4 // negative value convert into positive
console.log(Math.round(4.25)); //  4
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.9)); // 4
console.log("\n");

console.log(Math.random()); // bitween 0 to 1
console.log(Math.pow(10, 2)); // 100
console.log(Math.sqrt(25)); // 5
console.log("\n");

console.log(Math.max(4, 3, 6, 8)); // 8
console.log(Math.min(4, 3, 6, 8)); // 3
console.log("\n");


console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);
console.log("\n");

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

