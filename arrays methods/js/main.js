//? Array methods
// const users = ["Ibrohim", "Ravshan", "Ozodbek", "Ismoil", "Abror", "Aziz"];
//! push => array oxiridan ma'lumot qo'shadi
// users.push("Abdulla");
// console.log(users.push("Sardorbek")); // array length => 7
// console.log(users);
//! pop => array oxiridan bitta ma'lumot olib tashlaydi
// console.log(users.pop()); // Aziz
// console.log(users);

//! unshift => array boshidan ma'lumot qo'shadi
// console.log(users);
// console.log(users.unshift("Hello")); // array length => 7
// console.log(users);

//! shift => array boshidan bitta ma'lumot olib tashlaydi
// console.log(users);
// console.log(users.shift()); // Ibrohim
// console.log(users);

// const users = ["Ibrohim", "Ravshan", "Ozodbek", "Ismoil", "Abror", "Aziz"];
// console.log(users.indexOf("Ravshan"));
// console.log(users.includes("Abror"))

//* Amaliyot
const users = [];

function add() {
  const firstname = prompt("Firstname:");
  const age = prompt("Age:");

  const userObject = {
    name: firstname,
    age: age,
  };

  users.push(userObject);
  console.log(users);
}

function check() {
  const firstname = prompt("Firstname to check:");
  const age = prompt("Age to check:");

  const checkObj = {
    name: firstname,
    age: age,
  };

  let isStudent = false;

  for (let i = 0; i < users.length; i++) {
    if (users[i].name === checkObj.name && users[i].age === checkObj.age) {
      isStudent = true;
    }
  }

  if (isStudent) {
    alert("Welcome to Website!");
  } else {
    alert("Your data is incorrect!");
  }
}

//* ++ increment
// let x = 5;
// x++
// x++
// console.log(x);

//? for loop
// const users = [{name: "Ibrohim", age: 20}, {name: "Ravshan", age: 18}];

// for (let i = 0; i < users.length; i++) {
//   console.log(users[i].name, users[i].age);
// }