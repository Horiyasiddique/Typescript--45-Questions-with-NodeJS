// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified
//making function
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magician) {
    return magician.map(function (name) { return "The Great ".concat(name, " "); });
}
//describing array
var magician_names = ["Harry Potter", "Derren Brown", "Harry Houdini"];
var great_magicians = make_great(magician_names);
console.log(great_magicians);
show_magicians(great_magicians);
