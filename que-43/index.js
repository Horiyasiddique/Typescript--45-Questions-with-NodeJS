// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name
//making function
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magician) {
    return magician.map(function (name) { return "The Great ".concat(name, " "); });
}
//describing array
var magician_names = ["Harry Potter", "Derren Brown", "Harry Houdini"];
//making a copy of original array
var copy_magician_names = magician_names.slice();
//modify the copied array to include the great with their names
var copy_great_magician = make_great(copy_magician_names);
//show both array original and copied
//ORIGINAL
show_magicians(magician_names);
//COPIED
show_magicians(copy_great_magician);
