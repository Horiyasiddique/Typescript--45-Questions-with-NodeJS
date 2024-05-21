// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message

function make_shirt(size : string =  "Large" , print_message : string = "I love Typescript"){
    console.log(`Creating a ${size} shirt with the ${print_message} prints on shirt `)
}

//calling function with default size and message
make_shirt()

//calling a function with medium size nad default message
make_shirt("Medium")

//calling afunction with small size and also a different message
make_shirt("small" , "I love HTML and CSS")