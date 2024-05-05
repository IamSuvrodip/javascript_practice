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
