// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

//MAKING ARRAY
let favorite_fruits : string[] = ["Orange" , "Peach" , "Strawberry"];


//CHECK ELEMENTS OF ARRAY ARE INCULDE OR NOT INCLUDE AND PRINT MESSAGE
if(favorite_fruits.includes("Orange")){
    console.log("I really like Oranges too much")
}
if(favorite_fruits.includes("Peach")){
    console.log("I really like Peach too much")
}
if(favorite_fruits.includes("Kiwi")){
    console.log("I really like Kiwi too much")
}
if(favorite_fruits.includes("Strawberry")){
    console.log("I really like Strawberry too much")
}
if(favorite_fruits.includes("Grapes")){
    console.log("I really like Grapes too much")
}