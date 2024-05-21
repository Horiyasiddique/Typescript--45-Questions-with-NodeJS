// No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
var user_names = [];
if (user_names.length === 0) {
    console.log("We need to find some users");
}
else {
    //use forEach loop on array
    user_names.forEach(function (one_user) {
        if (one_user === "Admin") {
            console.log("Hello! ".concat(one_user, " , Would you like to see a status report ? "));
        }
        else {
            console.log("Hello! ".concat(one_user, " , Thank you for logging in again"));
        }
    });
}
