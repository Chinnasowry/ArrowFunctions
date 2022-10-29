import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));
//ReactDOM.render(<h1>Hello Chinna</h1>, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

function square(x) {
  return x * x;
}

//const newNumbers = numbers.map(x => x*x);

console.log(numbers.map(square));
//console.log(newNumbers);

////Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });
console.log(numbers.map((x) => x * 2));

//////Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(function(num) {
//   return num < 10;
// });
console.log("This is map of x  < 10");
console.log(numbers.map((x) => x < 10));
console.log("I am filter");
console.log(numbers.filter((x) => x < 10));

//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//     return accumulator + currentNumber;
// })
console.log("I am reduce");
console.log(numbers.reduce((x, y) => x + y));

////Find - find the first item that matches from an array.
// const newNumber = numbers.find(function (num) {
//   return num > 10;
// })
console.log(numbers.find((x) => x > 10));

////FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// })
