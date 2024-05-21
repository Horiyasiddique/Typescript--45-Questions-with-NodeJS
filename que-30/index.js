// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
//make array
var user_names = ["Adam", "Eric", "Ayesha", "Aditi", "Naba"];
//use forEach loop on array
user_names.forEach(function (one_user) {
    if (one_user === "Admin") {
        console.log("Hello! ".concat(one_user, " , Would you like to see a status report ? "));
    }
    else {
        console.log("Hello! ".concat(one_user, " , Thank you for logging in again"));
    }
});
