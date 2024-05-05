const marvelheros = ["Ironman", "spiderman", "thor", "hulk"];
const dcheros = ["Batman", "Superman", "flash"];

//marvelheros.push(dcheros);
//console.log(marvelheros);

/*
[
    'Ironman',
    'spiderman',
    'thor',
    'hulk',
    [ 'Batman', 'Superman', 'flash' ] ///// as a one element
]
*/

//const allheros = marvelheros.concat(dcheros);
//console.log(allheros);
/*
[
  'Ironman',
  'spiderman',
  'thor',
  'hulk',
  'Batman',
  'Superman',
  'flash'
]
*/
// ... three dot is spread all elements
const all_new_heros = [...marvelheros, ...dcheros];
console.log(all_new_heros);
console.log("\n");
/*
[
  'Ironman',
  'spiderman',
  'thor',
  'hulk',
  'Batman',
  'Superman',
  'flash'
]
*/
const another_array = [1, 2, 3, [4, 5, 6], 7, 8, [5, 5, 8, [9, 5, 6, 8]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);
console.log("\n");

/*
[
  1, 2, 3, 4, 5, 6,
  7, 8, 5, 5, 8, 9,
  5, 6, 8
]
*/
console.log(real_another_array.sort());
console.log("\n");
/*
[
  1, 2, 3, 4, 5, 5,
  5, 5, 6, 6, 7, 8,
  8, 8, 9
]
*/
const uniqueArray = [...new Set(real_another_array)];
console.log(uniqueArray);
console.log("\n");
/*
[
  1, 2, 3, 4, 5,
  6, 7, 8, 9
]
*/
