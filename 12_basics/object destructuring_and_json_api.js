const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Suvro";
tinderUser.isLoggedIn = false;

console.log(tinderUser);
console.log("\n");
/*
{ id: '123abc', name: 'Suvro', isLoggedIn: false }
*/

const course = {
  name: "js in hindi",
  price: "9999",
  teacher: "Suvrodip",
};
console.log(course.teacher);

const { price } = course;
console.log(price);
console.log("\n");
/*
Suvrodip
9999
*/
