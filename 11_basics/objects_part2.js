//const tinderUser = new Object(); // {}  // this is single tearm object

const tinderUser = {}; // {}  // this is NON single tearm object

tinderUser.id = "123abc";
tinderUser.name = "Suvro";
tinderUser.isLoggedIn = false;

console.log(tinderUser);
// { id: '123abc', name: 'Suvro', isLoggedIn: false }
console.log("\n");

const regularUser = {
  email: "abc@gmail.com",
  fullname: {
    firstName: "Suvrodip",
    lastName: "Chakroborty",
  },
};

console.log(regularUser);
console.log(regularUser.fullname);
console.log(regularUser.fullname.firstName);
/*
{
  email: 'abc@gmail.com',
  fullname: { firstName: 'Suvrodip', lastName: 'Chakroborty' }

}
{ firstName: 'Suvrodip', lastName: 'Chakroborty' }
Suvrodip
*/

console.log("\n");

const obj1 = { 1: "a", 2: "b", 3: "c" };
const obj2 = { 4: "d", 5: "e", 6: "f" };

const obj3 = { obj1, obj2 };
const obj4 = Object.assign({}, obj1, obj2);
console.log(obj3);
console.log(obj4);
console.log("\n\n");
/*

{
  obj1: { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' },
  obj2: { '4': 'd', '5': 'e', '6': 'f' }
}
{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

*/

const obj5 = { ...obj1, ...obj2 };
console.log(obj5);
console.log("\n");
// { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
