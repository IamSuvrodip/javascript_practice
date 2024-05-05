/*function one() {
  console.log("one");
}
function two() {
  console.log("two");
}
function three() {
  console.log("three");
}
one();
two();
three();*/
/*
one
two
three
*/
/*function one() {
  console.log("one");
  two();
}
function two() {
  console.log("two");
  three();
}
function three() {
  console.log("three");
  one();
}
one();
two();
three();*/

/*
infinite one two three print
*/

function one() {
  console.log("one");
  two();
}
function two() {
  console.log("two");
  three();
}
function three() {
  console.log("three");
}
one();
two();
three();

/*
one
two
three
two
three
three
*/
