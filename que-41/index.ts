// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


//making function
function show_magicians(magicians : string[]){
    magicians.forEach(name => console.log(name))
}

//describing array
let magician_names : string[] = ["Harry Potter" , "Derren Brown" , "Harry Houdini"]

//call the funvtion to print each magician name
show_magicians(magician_names)