// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
// // MAKING AN ARRAY
var pets_animals = ["Cat", "Dog", "Cow"];
// //USING FOR LOOP
for (var _i = 0, pets_animals_1 = pets_animals; _i < pets_animals_1.length; _i++) {
    var one_animal = pets_animals_1[_i];
    console.log("A ".concat(one_animal, " , would make a great pet"));
}
// //PRINT A MESSAGE OUTSIDE OF FOR LOOP
console.log("Any of these animals would make a great pet");
