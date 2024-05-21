// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

//define a function with rest parameter

function make_sandwich(...items : string[]){
    console.log(" \n Making a sandwich with the following items : \n");

    items.forEach(singleItem => console.log(singleItem));

    console.log("\nNow your Delecious sandwich\n")
}

//call the function 3 times with 3 arguments

make_sandwich("Chicken" , "Cheese" , "Mayo" , "Egg")
make_sandwich("Beef" , "Butter" , "Ketchup" )
make_sandwich("Chicken Spread" , "Onion" , "Capsicum", "Tomato" , "Bread Crumbs" , "Bread")