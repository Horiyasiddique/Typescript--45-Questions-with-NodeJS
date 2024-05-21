"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
let apple = "apple";
let upperCaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["Apple", "Mango", "Banana"];
//Tests for equality and inequality with strings
console.log("is x equal to apple ???");
console.log(apple === "apple");
console.log("is apple not equal to apple ???");
console.log(apple != "apple");
// • Tests using the lower case function
console.log("is APPLE is equal to apple after after converting to lowercase");
console.log(upperCaseApple.toLocaleLowerCase() == "apple");
console.log("is APPLE is not  equal to apple after after converting to lowercase");
console.log(upperCaseApple.toLocaleLowerCase() != "apple");
//numerical tests
console.log("\n is ten is equal to 10 ??");
console.log(ten == twenty);
console.log("\n is ten is not  equal to 10 ??");
console.log(ten != twenty);
console.log("\n is ten is greater than 0 ");
console.log(ten > 0);
console.log("\n is twenty is less  than  10 ");
console.log(twenty < 10);
//greater than or equal to
console.log("\n is ten greater than or equal to six");
console.log(ten >= 6);
//less than or equal to
console.log("\n is twenty less than or equal to 10 ");
console.log(twenty <= 10);
// test using && operators
console.log("\n twenty is not equals to ten and twenty is greater than ten");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equals to ten and twenty is greater than thirty");
console.log(twenty != 10 && twenty > 30);
//test using || operators
console.log("\n twenty is not equals to ten or twenty is greater than ten");
console.log(twenty != 10 || twenty > 10);
console.log("\n twenty is not equals to ten or twenty is greater than thirty");
console.log(twenty != 20 || twenty > 30);
//test wheather an item is in array
console.log("is Mango include in my fruits array");
;
console.log(fruits.includes("Mango"));
console.log("is orange include in my fruits array");
console.log(fruits.includes("Orange"));
