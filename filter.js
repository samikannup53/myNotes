//Array Methods in JS

// .filter() Method

// .filter() Method Creates new array by keeping the items that passes the given condition

// Basic Synatam
// newArr = orgArr.filter(function);

// This function can be either 1. Arrow Function (or) 2. Annonymous Regular Function (or) 3. Named Function

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);

//1. Using Arrow Function

console.log("Using Arrow Function");

console.log("Even Numbers");
let eveNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});
console.log(eveNumbers);

console.log("Odd Numbers");
let oddNumbers = numbers.filter((number) => number % 2 != 0);
console.log(oddNumbers);

// 2. Using Annonymous Regular Function

let bigNumbers = numbers.filter(function (number) {
  return number > 5;
});
console.log("Big Numbers");
console.log(bigNumbers);

// 3. Using Named Function

function smallNumberFn(number) {
  return number < 5;
}

let smallNumbers = numbers.filter(smallNumberFn);
console.log("Small Numbers");
console.log(smallNumbers);

// Whenever uses {} in function then Return shoule be used, If return is not used it will give undefined.

// In Callback Function we can take upto 3 Parameters (Max : 3 Pramameters Only)
// 1. Element
// 2. Index
// 3. Array
// This Order Can't be changed, bcz its default order from js

// Realtime Example

let products = [
  { id: 1, prodName: "Mobile", inStock: true },
  { id: 2, prodName: "Laptop", inStock: false },
  { id: 3, prodName: "Tablet", inStock: true },
];

// Filtering Available Products

let availProducts = products.filter((product) => {
  return product.inStock;
});
console.log("Available Products");
console.log(availProducts);

// Small Bookify Task
// ==================
let books = [
  { id: 1, bookName: "JS Notes", author: "Sami", pages: 400, price: 500 },
  { id: 2, bookName: "CSS Notes", author: "Gokul", pages: 300, price: 400 },
  { id: 3, bookName: "React Notes", author: "Logu", pages: 200, price: 700 },
  { id: 4, bookName: "Node Notes", author: "Vino", pages: 500, price: 500 },
  { id: 5, bookName: "Express Notes", author: "Sri", pages: 700, price: 600 },
];

// Filter Books by ID
let bookID = books.filter((book) => {
  return book.id === 4;
});
console.log(bookID);

// Filter Books Price more than 500
let bookRate = books.filter((book) => book.price > 500);
console.log(bookRate);

// Filter and Showing Books Names Only those price more than 500
let bookName = books
  .filter((book) => book.price > 500)
  .map((book) => book.bookName);
console.log(bookName);
