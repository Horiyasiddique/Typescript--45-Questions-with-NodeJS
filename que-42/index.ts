// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified


//making function
function show_magicians(magicians : string[]){
    magicians.forEach(name => console.log(name))
}


function make_great(magician: string[]){
    return magician.map(name => `The Great ${name} `)
}
//describing array
let magician_names : string[] = ["Harry Potter" , "Derren Brown" , "Harry Houdini"]

 let great_magicians = make_great(magician_names)

 console.log(great_magicians)

 show_magicians(great_magicians)