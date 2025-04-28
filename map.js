// Array Methods in JS

// .map() Method

// .map() creats an new array by doing something to each item in existing array.

// Basic Syntax
// let newArr = orgArr.map(function);
// This function can be either 1. Arrow Function (or) 2. Annonymous Regular Function (or) 3. Named Function

let fruits = ["Apple", "Orange", "Banana"];
console.log(fruits);

// 1. Arrow Function

console.log("Using Arrow Function");
let upperFruits = fruits.map((fruit) => {
  return fruit.toUpperCase();
});
console.log(upperFruits);

let lowerFruits = fruits.map((fruit) => fruit.toLowerCase());
console.log(lowerFruits);

// 2. Annonymus Regular Function

console.log("Using Regular Function");
let upperFruits1 = fruits.map(function (fruit) {
  return fruit.toUpperCase();
});
console.log(upperFruits1);

// 3. Named Function

console.log("Using Named Function");

function lowerFruitFn(item) {
  return item.toLowerCase();
}

let lowerFruits1 = fruits.map(lowerFruitFn);
console.log(lowerFruits1);

// Whenever uses {} in function then Return shoule be used, If return is not used it will give undefined.

// In Callback Function we can take upto 3 Parameters (Max : 3 Pramameters Only)
// 1. Element
// 2. Index
// 3. Array
// This Order Can't be changed, bcz its default order from js