// //Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let favoritePlaces : string[] = ["Turkey" , "Switzerland" , "Saudia Arabia" , "Neelam Valley" , "Hunza Valley"]

console.log( "Orignal Order" , favoritePlaces);

// print the array in alphabetical order without modifying the original array
console.log("Alphabetical Oder" , [...favoritePlaces].sort())

//show that my array is in its original order
console.log( " still i  its original order" , favoritePlaces);

//print the array in reverse albhabetical order
console.log(" Reverse Alphabetical Oder" , [...favoritePlaces].sort().reverse())

//show that my array is in its original order
console.log( " still in it original order" , favoritePlaces);

//we have changed the orignal array order now
console.log("orignal order changed" ,favoritePlaces.reverse())

//back to original order
console.log("back to original order" ,favoritePlaces.reverse())

//sort the array for alphabetical order
console.log(" again Alphabetical Oder" , favoritePlaces.sort())

//reverse alphabetical order
console.log(" Reverse Alphabetical Oder" , favoritePlaces.sort().reverse())



