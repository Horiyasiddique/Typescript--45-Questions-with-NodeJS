// Name cases : store a person's name in avariable and then print that person's name in lower case ,upper case and title case
let X2 : string = "Horiya Siddique" ;
// in lower case
console.log("lowercase:" ,X2.toLowerCase());
// in Upper case
console.log("uppercase:" ,X2.toUpperCase());
// in Title case
console.log("titlecase:" ,X2.replace(/\b\w/g,c=> c.toUpperCase()));