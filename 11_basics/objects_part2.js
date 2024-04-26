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


const users = [
  {
    id: 1,
    email: "abc@gmail.com",
  },
  {
    id: 2,
    email: "abcd@gmail.com",
  },
  {
    id: 3,
    email: "abcde@gmail.com",
  },
];

console.log(users[1].email);
console.log(tinderUser);
console.log("\n");
/*
abcd@gmail.com
{ id: '123abc', name: 'Suvro', isLoggedIn: false }
*/

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log("\n");
/*
[ 'id', 'name', 'isLoggedIn' ]
[ '123abc', 'Suvro', false ]
[ [ 'id', '123abc' ], [ 'name', 'Suvro' ], [ 'isLoggedIn', false ] ] 
*/

console.log(tinderUser.hasOwnProperty("name")); // true
console.log(tinderUser.hasOwnProperty("email")); // false
