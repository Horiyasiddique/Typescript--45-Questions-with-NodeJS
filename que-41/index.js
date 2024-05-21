// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
//making function
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//describing array
var magician_names = ["Harry Potter", "Derren Brown", "Harry Houdini"];
//call the funvtion to print each magician name
show_magicians(magician_names);
