// Memory Two type:-
//1. Stack-----> it is use in Primitive
//2. Heap------> it is use in Non Primitive

let videoname = "pokemon";
let another_videoname = videoname;

another_videoname = "Doremon";

console.log(videoname);
console.log(another_videoname);
console.log("\n");

let user1 = {
  name: "Suvrodip",
  age: 18,
};

let user2 = user1;

user2.name = "Dip";

console.log(user1.name);
console.log(user2.name);
