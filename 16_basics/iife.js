// IIFE stands for Immediately Invoked Function Expression

// normal
function chai() {
  console.log(`DB CHAI CONNECTED`);
}
chai();
// DB CONNECTED

// IIFE function
(function Tea() {
  console.log(`DB TEA CONNECTED`);
})();
// interview question
// what is iife
// jo function imidiate exicute ho jai -------> not selected in interview
// global scopki polution se problem hoti hain kayibar to jo global scopki variables hain or jovi ohapar decliar hain osab problem hatane keliye iife function use hota hain

// unnamed iife
(() => {
  console.log(`DATABASE`);
})();
// named iife
(function coffee() {
  console.log(`Coffee`);
})();
// two iife together

// unnamed parameter pass iife
((name) => {
  console.log(`Welcome ${name}`);
})("Suvrodip");
/*
DB CHAI CONNECTED
DB TEA CONNECTED
DATABASE
Coffee
Welcome Suvrodip
*/
